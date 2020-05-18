import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataCollectionService } from "src/app/services/data-collection.service";
import { ChartDataSets, ChartType } from "chart.js";
import { Label, Color } from "ng2-charts";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.page.html",
  styleUrls: ["./country-details.page.scss"],
})
export class CountryDetailsPage implements OnInit {
  information = null;
  graph = null;
  statesData= null;

  contentData: any;
  searchState: any;

  showDetails = false;
  showStates = false;

  // Doughnut Chart
  doughnutChartData: ChartDataSets[] = [];

  doughnutChartLabels: Label[] = ["Confirmed", "Recovered", "Deaths"];
  doughnutChartType: ChartType = "doughnut";

  doughnutColors: Color[] = [
    {
      backgroundColor: ["#FFD534", "#2FDF75", "#FF4961"],
      borderColor: ["#FFD534", "#2FDF75", "#FF4961"],
    },
  ];

  doughnutChartOptions = {
    responsive: true,
    legend: {
      position: "right",
      labels: {
        fontColor: "#f7f7f7",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 20,
        bottom: 0,
        top: 0,
      },
    },
  };

  // lineChart Details
  lineCasesData: ChartDataSets[] = [];
  lineDeathsData: ChartDataSets[] = [];
  lineRecoveredData: ChartDataSets[] = [];

  lineLabel: Label[] = [];
  Type: ChartType = "line";

  lineChartOptions = {
    responsive: true,
    legend: {
      display: false,
      labels: {
        fontColor: "#f7f7f7",
      },
    },
    scales: {
      xAxes: [{}],
      yAxes: {
        id: "y-axis-1",
        position: "right",
      },
    },
    elements: {
      points: {
        radius: 0,
      },
      line: {
        fill: false,
      },
    },
    tooltips: {
      enabled: false,
    },
  };

  lineCasesColors: Color[] = [
    {
      backgroundColor: ["#FFD534"],
      borderColor: ["#FFD534"],
    },
  ];
  lineDeathsColors: Color[] = [
    {
      backgroundColor: ["#FF4961"],
      borderColor: ["#FF4961"],
    },
  ];
  lineRecoveredColors: Color[] = [
    {
      backgroundColor: ["#2FDF75"],
      borderColor: ["#2FDF75"],
    },
  ];
  // Charts end


  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataCollectionService
  ) {}

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get("name");
    this.dataService.getCountryDetails(name).subscribe((result) => {
      this.information = result;
      this.contentData = true;
      this.doughnutChartData = [];

      this.doughnutChartData.push(result["cases"]);
      this.doughnutChartData.push(result["recovered"]);
      this.doughnutChartData.push(result["deaths"]);
    });

    if (name == "World") {
      this.dataService.getGraphDataWorld().subscribe((result) => {
        this.graph = result;
        var confirmed: any = Object.entries(this.graph["cases"]);
        var deaths: any = Object.entries(this.graph["deaths"]);
        var recovered: any = Object.entries(this.graph["recovered"]);

        for (let i = 0; i < 30; ++i) {
          this.lineLabel.push(confirmed[i][0]);
          this.lineCasesData.push(confirmed[i][1]);
          this.lineDeathsData.push(deaths[i][1]);
          this.lineRecoveredData.push(recovered[i][1]);
        }
      });
    } else {
      this.dataService.getGraphData(name).subscribe((result) => {
        this.graph = result;
        var confirmed: any = Object.entries(this.graph["timeline"]["cases"]);
        var deaths: any = Object.entries(this.graph["timeline"]["deaths"]);
        var recovered: any = Object.entries(
          this.graph["timeline"]["recovered"]
        );

        for (let i = 0; i < 30; ++i) {
          this.lineLabel.push(confirmed[i][0]);
          this.lineCasesData.push(confirmed[i][1]);
          this.lineDeathsData.push(deaths[i][1]);
          this.lineRecoveredData.push(recovered[i][1]);
        }
      });
    }

    if (name == "India"){
      this.dataService.getstatesDataIN().subscribe((result)=>{
        this.statesData = result['statewise'];
      });
    }

    if(name=="USA"){
      this.dataService.getstatesDataUS().subscribe((result)=>{
        this.statesData= result;
      })
    }
    

  }
}

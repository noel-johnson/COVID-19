import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCollectionService } from 'src/app/services/data-collection.service';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit {
  information = null;
  graph = null;

  lineCasesData : ChartDataSets[] =[];
  lineDeathsData : ChartDataSets[] =[];
  lineRecoveredData : ChartDataSets[] =[];

  lineLabel : Label[] =[];
Type: ChartType = 'line';
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataCollectionService) { 
    

  }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.dataService.getCountryDetails(name).subscribe(result => {
      console.log('Country Details: ', result);
      this.information = result;

    });

    this.dataService.getGraphData().subscribe(result=>{
      this.graph = result
      // console.log(Object.keys(this.graph['timeline']['cases']));
      var confirmed :any = Object.entries(this.graph['timeline']['cases'])
      var deaths: any = Object.entries(this.graph['timeline']['deaths'])
      var recovered: any = Object.entries(this.graph['timeline']['recovered'])

      // this.data[0].data=[];
      // this.data[0].data.push(g);
      for(let i=0; i<30;++i){
        this.lineLabel.push(confirmed[i][0]);
        this.lineCasesData.push(confirmed[i][1]);
        this.lineDeathsData.push(deaths[i][1]);
        this.lineRecoveredData.push(recovered[i][1]);
        // console.log(this.label);
        // this.label.push(g[0][i]);
      }
      
      console.log(this.lineRecoveredData);
      console.log(this.lineLabel);
    })

  } 
  
}

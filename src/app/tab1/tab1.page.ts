import { Component } from '@angular/core';
import { DataCollectionService } from '../services/data-collection.service';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  info: any = null; //For storing the data for the view

  // Chartjs Doughnout chart 
  doughnutChartData: ChartDataSets[] = [];

  doughnutChartLabels: Label[]=['Confirmed','Recovered','Deaths'];
  doughnutChartType: ChartType = 'doughnut';

  // Doughnut chart options

  doughnutColors: Color[]= [
    {
      backgroundColor: ["#FFD534","#2FDF75","#FF4961"],
      borderColor: ["#FFD534","#2FDF75","#FF4961"]
    }
  ];

   doughnutChartOptions = {
     responsive: true,
     legend:{
       position: 'right',
       labels:{
         fontColor: "#f7f7f7"
       }
     },
     layout: {
       padding: {
         left: 0,
         right: 20,
         bottom: 0,
         top: 0
       }
     }
   } 

  //  Ion-Scroll custom config
  sliderconfig ={
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 10
  }


// from tabs2
information: any = null;


  constructor(private dataService: DataCollectionService) { 

    this.dataService.getAll().subscribe((data) => {
      this.info = data;
      // console.log(data['cases']);
      // console.log(typeof(data));

      this.doughnutChartData=[];

        this.doughnutChartData.push(data['cases']);
        this.doughnutChartData.push(data['recovered']);
        this.doughnutChartData.push(data['deaths']);

        console.log(this.doughnutChartLabels);
      
      
      // console.log('data: ', this.doughnutChartData);
    });

    // from tabs2
    this.dataService.getCountryDetails('India').subscribe((data) => {
      console.log('Country Details: ', data);
      this.information = data;
    });

}
}

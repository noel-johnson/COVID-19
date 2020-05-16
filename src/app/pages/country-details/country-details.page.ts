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
  

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataCollectionService) { 
    

  }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.dataService.getCountryDetails(name).subscribe(result => {
      console.log('Country Details: ', result);
      this.information = result;

    });
  } 
  
}

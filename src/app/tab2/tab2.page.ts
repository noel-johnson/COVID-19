import { Component } from '@angular/core';
import { DataCollectionService } from '../services/data-collection.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  countries: any = null;
  searchCountry: any;
  contentLoaded = true;
  constructor(private dataService: DataCollectionService) {

    this.dataService.getCountries().subscribe((data) => {
      this.countries = data;
      this.contentLoaded = false;
    });
  }
}

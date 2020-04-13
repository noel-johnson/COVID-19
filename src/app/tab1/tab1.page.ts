import { Component } from '@angular/core';
import { DataCollectionService } from '../services/data-collection.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  info: any = null;

  constructor(private dataService: DataCollectionService) { 

    this.dataService.getAll().subscribe((data) => {
      this.info = data;
    });

}
}

import { Component } from '@angular/core';
import { DataCollectionService } from '../services/data-collection.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  info: any = null;

  sliderconfig ={
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 10
  }

  constructor(private dataService: DataCollectionService) { 

    this.dataService.getAll().subscribe((data) => {
      // console.log(data);
      this.info = data;
      // console.log(this.info.c);
    });

}
}

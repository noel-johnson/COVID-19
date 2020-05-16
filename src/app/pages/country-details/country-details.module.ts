import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryDetailsPageRoutingModule } from './country-details-routing.module';

import { CountryDetailsPage } from './country-details.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryDetailsPageRoutingModule,
    ChartsModule
  ],
  declarations: [CountryDetailsPage]
})
export class CountryDetailsPageModule {}

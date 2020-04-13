import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailsPage } from './country-details.page';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryDetailsPageRoutingModule {}

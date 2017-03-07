import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CarsDetailComponent } from './cars-detail.component';
import { FillUpsComponent } from './fill-ups.component';
import { FillUpsDetailComponent } from './fill-ups-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars/:id', component: CarsDetailComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'fillups/:id', component: FillUpsDetailComponent },
  { path: 'fillups', component: FillUpsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}

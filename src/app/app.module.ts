import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars.component';
import { CarsDetailComponent } from './cars-detail.component';
import { CarService } from './cars.service';
import { FillUpsComponent } from './fill-ups.component';
import { FillUpsDetailComponent } from './fill-ups-detail.component';
import { FillUpService } from './fill-ups.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailComponent,
    FillUpsComponent,
    FillUpsDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ FillUpService, CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

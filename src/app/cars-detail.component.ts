import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

import { Car } from './car';
import { CarService } from './cars.service';
import { FillUp } from './fill-up';
import { FillUpService } from './fill-ups.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'car-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  car: Car;
  fillups: FillUp[];

  constructor(
    private carService: CarService,
    private fillUpService: FillUpService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.carService.getCar(+params['id']))
      .subscribe(car => this.car = car);
    this.route.params
      .switchMap((params: Params) => this.fillUpService.getFillUps(+params['id']))
      .subscribe(fills => this.fillups = fills);
  }

  save(): void {
    this.carService.update(this.car)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

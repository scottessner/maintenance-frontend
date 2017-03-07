import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './car';
import { CarService } from './cars.service';

@Component({
  moduleId: module.id,
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(
    private carService: CarService,
    private router: Router) {}

  getCars(): void {
    this.carService
      .getCars()
      .then(cars => this.cars = cars);
  }

  ngOnInit(): void {
    this.getCars();
  }

  gotoDetail(car: Car): void {
    this.router.navigate(['/cars', car.id]);
  }
}

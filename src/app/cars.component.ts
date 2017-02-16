import {Component} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: Car[] = CARS;
  selectedCar: Car;

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}

const CARS: Car[] = [
  {
    id: 1,
    make: 'Volkswagen',
    model: 'Passat',
    nickname: "Scott's Passat",
    year: 2006
  },
  {
    id: 2,
    make: 'Acura',
    model: 'MDX',
    nickname: "Sarah's MDX",
    year: 2015
  },
  {
    id: 3,
    make: 'Chevrolet',
    model: 'C/10',
    nickname: "Old Truck",
    year: 1970
  }
];

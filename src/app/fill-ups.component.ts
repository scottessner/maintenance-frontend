import { Component } from '@angular/core';
import { Car } from './car';
import { FillUp } from './fill-up';

@Component({
  selector: 'fill-ups',
  templateUrl: './fill-ups.component.html',
  styleUrls: ['./fill-ups.component.css']
})
export class FillupsComponent {
  fillUps: FillUp[] = FILLUPS;
  selectedFillUp: FillUp;
}

const FILLUPS: FillUp[] = [
  {
    odometer: 115000,
    distance: 450,
    price: 3.259,
    quantity: 15.7,
    date: Date.parse("2012-04-21T18:25:43-05:00"),
    carId: 1,
  }
];

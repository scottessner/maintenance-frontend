import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FillUp } from './fill-up';
import { FillUpService } from './fill-ups.service';

@Component({
  moduleId: module.id,
  selector: 'fill-ups',
  templateUrl: './fill-ups.component.html',
  styleUrls: ['./fill-ups.component.css']
})
export class FillUpsComponent implements OnInit {
  fillUps: FillUp[];
  selectedFillUp: FillUp;

  constructor(
    private fillUpService: FillUpService,
    private router: Router) {}

  getFillUps(): void {
    this.fillUpService
      .getFillUps(null)
      .then(fills => this.fillUps = fills);
  }

  ngOnInit(): void {
    this.getFillUps();
  }

  onSelect(fillup: FillUp): void {
    this.selectedFillUp = fillup;
  }

  gotoDetail(): void {
    this.router.navigate(['/fillups', this.selectedFillUp.id]);
  }
}

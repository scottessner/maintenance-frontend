import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FillUp } from './fill-up';
import { FillUpService } from './fill-ups.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'fill-up-detail',
  templateUrl: './fill-ups-detail.component.html',
  styleUrls: ['./fill-ups-detail.component.css']
})
export class FillUpsDetailComponent implements OnInit {
  fillup: FillUp;

  constructor(
    private fillUpService: FillUpService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.fillUpService.getFillUp(+params['id']))
      .subscribe(fillup => this.fillup = fillup);
  }

  save(): void {
    this.fillUpService.update(this.fillup)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';
import { FillUp } from './fill-up';

@Injectable()
export class FillUpService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private fillupsUrl = environment.apiUrl + 'fill-ups/';

  constructor(private http: Http){ }

  getFillUps(car: number): Promise<FillUp[]> {
    var url = ''
    if(car) {
      url = `${this.fillupsUrl}?car=${car}`; }
    else
      url = this.fillupsUrl

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as FillUp[])
      .catch(this.handleError);
  }

  getFillUp(id: number): Promise<FillUp> {
    const url = `${this.fillupsUrl}${id}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as FillUp)
      .catch(this.handleError);
  }

  delete(id: number): Promise<FillUp> {
    const url = `${this.fillupsUrl}${id}/`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(fill: FillUp): Promise<FillUp> {
    return this.http.post(this.fillupsUrl, JSON.stringify(fill), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as FillUp)
      .catch(this.handleError);
  }

  update(fill: FillUp): Promise<FillUp> {
    const url = `${this.fillupsUrl}${fill.id}/`;
    return this.http
      .put(url, JSON.stringify(fill), {headers: this.headers})
      .toPromise()
      .then(() => fill)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

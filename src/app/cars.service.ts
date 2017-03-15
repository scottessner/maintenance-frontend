import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';
import { Car } from './car';

@Injectable()
export class CarService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private carsUrl = environment.apiUrl + 'cars/';

  constructor(private http: Http){ }

  getCars(): Promise<Car[]> {
    return this.http.get(this.carsUrl)
      .toPromise()
      .then(response => response.json() as Car[])
      .catch(this.handleError);
  }

  getCar(id: number): Promise<Car> {
    const url = `${this.carsUrl}${id}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Car)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Car> {
    const url = `${this.carsUrl}${id}/`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(car: Car): Promise<Car> {
    return this.http.post(this.carsUrl, JSON.stringify(car), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Car)
      .catch(this.handleError);
  }

  update(car: Car): Promise<Car> {
    const url = `${this.carsUrl}${car.id}/`;
    return this.http
      .put(url, JSON.stringify(car), {headers: this.headers})
      .toPromise()
      .then(() => car)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

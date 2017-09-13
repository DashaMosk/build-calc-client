import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Result} from '../domain/result';

@Injectable()
export class CalculationService {

  constructor(private http: Http) { }

  doCalculation(facilityId): Observable<Result[]> {
    return this.http.get('/api/calculation?facilityId=' + facilityId)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCalculationForFacility(facilityId): Observable<Result[]> {
    return this.http.get('/api/facilityCalc?facilityId=' + facilityId)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCalculationForRooms(facilityId): Observable<Result[]> {
    return this.http.get('/api/roomCalc?facilityId=' + facilityId)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

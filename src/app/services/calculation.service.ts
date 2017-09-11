import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Result} from '../domain/result';

@Injectable()
export class CalculationService {

  constructor(private http: Http) { }

  getCalculation(facilityId, recalculate): Observable<Result[]> {
    return this.http.get('/api/calculation?facilityId=' + facilityId + '&recalculate=' + recalculate)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCalculationForFacility(facilityId): Observable<Result[]> {
    return this.http.get('/api/facilityCalc?facilityId=' + facilityId)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Facility} from '../domain/facility';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FacilityService {

  constructor(private http: Http) { }

  postFacility(facility): Observable<Facility> {
    return this.http.post('/api/facility', facility)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFacilities(): Observable<Facility[]> {
    return this.http.get('/api/facilities')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteFacility(id: number): Observable<any> {
    return this.http.delete('/api/facility?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

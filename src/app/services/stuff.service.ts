import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Stuff} from '../domain/stuff';

@Injectable()
export class StuffService {

  constructor(private http: Http) { }

  postStuff(stuff): Observable<Stuff> {
    return this.http.post('/api/stuff', stuff)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getStuff(): Observable<Stuff[]> {
    return this.http.get('/api/allStuff')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteStuff(id: number): Observable<any> {
    return this.http.delete('/api/stuff?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Package} from '../domain/package';

@Injectable()
export class PackingService {

  constructor(private http: Http) { }

  postPack(pack): Observable<Package> {
    return this.http.post('/api/packing', pack)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPack(id: number): Observable<Package> {
    return this.http.get('/api/packing?id=' + id)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPacks(): Observable<Package[]> {
    return this.http.get('/api/packingList')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePack(id: number): Observable<any> {
    return this.http.delete('/api/packing?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

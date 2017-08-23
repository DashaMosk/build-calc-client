import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Wall} from '../domain/wall';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WallService {

  constructor(private http: Http) { }

  postWall(wall): Observable<Wall> {
    return this.http.post('/api/wall', wall)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getWalls(rId: number): Observable<Wall[]> {
    return this.http.get('/api/' + rId + '/walls')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteWall(id: number): Observable<any> {
    return this.http.delete('/api/wall?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

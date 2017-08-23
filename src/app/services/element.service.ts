import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Element} from '../domain/element';

@Injectable()
export class ElementService {

  constructor(private http: Http) { }

  postDecoration(element): Observable<Element> {
    return this.http.post('/api/decoration', element)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postAperture(element): Observable<Element> {
    return this.http.post('/api/aperture', element)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDecorations(wId: number): Observable<Element[]> {
    return this.http.get('/api/' + wId + '/decorations')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getApertures(wId: number): Observable<Element[]> {
    return this.http.get('/api/' + wId + '/apertures')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteDecoration(id: number): Observable<any> {
    return this.http.delete('/api/decoration?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteAperture(id: number): Observable<any> {
    return this.http.delete('/api/aperture?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

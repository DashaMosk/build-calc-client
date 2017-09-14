import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Room} from '../domain/room';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomService {

  constructor(private http: Http) { }

  postRoom(room): Observable<Room> {
    return this.http.post('/api/room', room)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRoom(roomId: number): Observable<Room> {
    return this.http.get('/api/room/?id=' + roomId)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRooms(fId: number): Observable<Room[]> {
    return this.http.get('/api/' + fId + '/rooms')
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete('/api/room?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

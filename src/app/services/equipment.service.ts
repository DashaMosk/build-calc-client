import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FacilityEquipment} from '../domain/facility_equipment';

@Injectable()
export class EquipmentService {

  constructor(private http: Http) { }

  postFEquipment(fEquipment): Observable<FacilityEquipment> {
    return this.http.post('/api/equipment', fEquipment)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFEquipments(id: number, type: string): Observable<FacilityEquipment[]> {
    return this.http.get('/api/equipmentList?id=' + id + '&type=' + type)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteFEquipment(id: number): Observable<any> {
    return this.http.delete('/api/equipment?id=' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

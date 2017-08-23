import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../services/facility.service';
import {Facility} from '../../domain/facility';

@Component({
  selector: 'app-facility-holder',
  templateUrl: './facility-holder.component.html',
  styleUrls: ['./facility-holder.component.css']
})
export class FacilityHolderComponent implements OnInit {

  facilityList: Facility[];

  constructor(private facilityService: FacilityService) { }

  addFacility(facility) {
    this.facilityService.postFacility(facility)
      .subscribe(fct => { this.facilityList.unshift(fct); console.log('Facility was added ' + fct.id + ' ' + fct.name); }
      , err => { console.log(err); });
  }

  deleteFacility(facility) {
    this.facilityService.deleteFacility(facility.id)
      .subscribe((ok) => console.log(ok)
        , err => console.log(err));
    this.facilityList = this.facilityList.filter(e => e.id !== facility.id);
    console.log('Facility was removed ' +  + facility.id + ' ' + facility.name);
  }

  ngOnInit() {
    this.facilityService.getFacilities()
      .subscribe(facilities => { this.facilityList = facilities; }
      , err => {console.log(err); });
  }

}

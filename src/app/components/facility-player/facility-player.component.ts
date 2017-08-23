import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../domain/facility';

@Component({
  selector: 'app-facility-player',
  templateUrl: './facility-player.component.html',
  styleUrls: ['./facility-player.component.css']
})
export class FacilityPlayerComponent implements OnInit {

  @Input() facilityList: Facility[];
  @Output() onDelete = new EventEmitter<Facility>();

  constructor() { }

  ngOnInit() {
  }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }

}

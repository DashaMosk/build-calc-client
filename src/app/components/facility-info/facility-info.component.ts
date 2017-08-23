import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../domain/facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-info',
  templateUrl: './facility-info.component.html',
  styleUrls: ['./facility-info.component.css']
})
export class FacilityInfoComponent implements OnInit {

  @Input() facility: Facility;
  @Output() onDelete = new EventEmitter<Facility>();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }
}

import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Facility} from '../../domain/facility';
import {Result} from '../../domain/result';
import {CalculationService} from '../../services/calculation.service';
import {RoomAccordionComponent} from '../room-accordion/room-accordion.component';
import {FacilityInfoComponent} from '../facility-info/facility-info.component';

@Component({
  selector: 'app-facility-player',
  templateUrl: './facility-player.component.html',
  styleUrls: ['./facility-player.component.css']
})
export class FacilityPlayerComponent implements OnInit {

  @Input() facilityList: Facility[];
  @Output() onDelete = new EventEmitter<Facility>();

  @ViewChild(RoomAccordionComponent)
  private roomAccordion: RoomAccordionComponent;

  @ViewChild(FacilityInfoComponent)
  private facilityInfo: FacilityInfoComponent;

  constructor() { }

  ngOnInit() { }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }
}

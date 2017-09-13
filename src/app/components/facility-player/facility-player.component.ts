import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../domain/facility';
import {Result} from '../../domain/result';
import {CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-facility-player',
  templateUrl: './facility-player.component.html',
  styleUrls: ['./facility-player.component.css']
})
export class FacilityPlayerComponent implements OnInit {

  @Input() facilityList: Facility[];
  @Output() onDelete = new EventEmitter<Facility>();
  resultListByRooms: Result[];

  constructor(private calculationService: CalculationService) { }

  ngOnInit() { }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }

  refreshCalculatedData(facility: Facility) {
    this.calculationService.getCalculationForRooms(facility.id)
      .subscribe(result => this.resultListByRooms = result, error2 => console.log(error2));
  }
}

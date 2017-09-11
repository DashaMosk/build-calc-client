import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../domain/facility';
import {Router} from '@angular/router';
import {Result} from '../../domain/result';
import {CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-facility-info',
  templateUrl: './facility-info.component.html',
  styleUrls: ['./facility-info.component.css']
})
export class FacilityInfoComponent implements OnInit {

  @Input() facility: Facility;
  @Output() onDelete = new EventEmitter<Facility>();
  resultListByRoom: Result[];
  resultListByFacility: Result[];

  constructor(public router: Router, private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculateConsumption(this.facility, false);
  }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }

  calculateConsumption(facility: Facility, recalculate: boolean) {
    this.resultListByRoom = [];
    this.resultListByFacility = [];
    this.calculationService.getCalculation(facility.id, recalculate)
      .subscribe(result => this.resultListByRoom = result, error2 => console.log(error2));

    this.calculationService.getCalculationForFacility(facility.id)
      .subscribe(result => this.resultListByFacility = result, error2 => console.log(error2));
  }

}

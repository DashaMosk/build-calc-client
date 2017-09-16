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
  @Output() onCalculate = new EventEmitter<Facility>();
  resultListByFacility: Result[];

  constructor(public router: Router, private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculationService.getCalculationForFacility(this.facility.id)
      .subscribe(result => this.resultListByFacility = result, error2 => console.log(error2));
  }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }

  calculateConsumption(facility: Facility) {
    this.calculationService.doCalculation(facility.id)
      .subscribe(ok => console.log(ok), error2 => console.log(error2));

    this.onCalculate.emit(facility);
  }

  refreshData() {
    this.calculationService.getCalculationForFacility(this.facility.id)
      .subscribe(result => {this.resultListByFacility = result; console.log(this.resultListByFacility.length); }
        , error2 => console.log(error2));
  }

}

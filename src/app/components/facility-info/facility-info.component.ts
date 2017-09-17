import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../domain/facility';
import {Router} from '@angular/router';
import {Result} from '../../domain/result';
import {CalculationService} from '../../services/calculation.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-facility-info',
  templateUrl: './facility-info.component.html',
  styleUrls: ['./facility-info.component.css']
})
export class FacilityInfoComponent implements OnInit {

  @Input() facility: Facility;
  @Output() onDelete = new EventEmitter<Facility>();
  resultListByFacility: Result[];

  constructor(private router: Router, private calculationService: CalculationService) { }

  ngOnInit() {
    this.calculationService.getCalculationForFacility(this.facility.id)
      .subscribe(result => this.resultListByFacility = result, error2 => console.log(error2));
  }

  deleteFacility(facility: Facility) {
    this.onDelete.emit(facility);
  }

  calculateConsumption(facility: Facility) {
    this.calculationService.doCalculation(facility.id)
      .flatMap( result => Observable.of(result))
      .subscribe(ok => { console.log(ok); this.router.navigateByUrl('/'); }, error2 => console.log(error2));
    this.router.navigateByUrl('/inProcess');
  }

}

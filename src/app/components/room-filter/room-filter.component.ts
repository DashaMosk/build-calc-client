import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Room} from '../../domain/room';
import {Result} from '../../domain/result';
import {CalculationService} from '../../services/calculation.service';

@Component({
  selector: 'app-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.css']
})
export class RoomFilterComponent implements OnInit, OnChanges {

  @Input() room: Room;
  @Input() tempCalculation: Result[];
  calculation: Result[];

  constructor(private calculationService: CalculationService) { }

  ngOnInit() {
    this.getCalculation();
  }

  getCalculation() {
    this.calculationService.getCalculationForRooms(this.room.facility.id)
      .map(list => list.filter(e => e.roomId === this.room.id))
      .subscribe(e => this.calculation = e, error2 => console.log(error2));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tempCalculation) {
      this.calculation = this.tempCalculation.filter(e => e.roomId === this.room.id);
    }
  }

}

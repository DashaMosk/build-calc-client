import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacilityEquipment} from '../../domain/facility_equipment';

@Component({
  selector: 'app-facility-equipment-list',
  templateUrl: './facility-equipment-list.component.html',
  styleUrls: ['./facility-equipment-list.component.css']
})
export class FacilityEquipmentListComponent implements OnInit {

  @Input() items: FacilityEquipment[];
  @Output() onRemove = new EventEmitter<FacilityEquipment>();

  constructor() { }

  ngOnInit() {
  }

  removeItem(item: FacilityEquipment) {
    this.onRemove.emit(item);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacilityEquipment} from '../../domain/facility_equipment';

@Component({
  selector: 'app-facility-equipment-element',
  templateUrl: './facility-equipment-element.component.html',
  styleUrls: ['./facility-equipment-element.component.css']
})
export class FacilityEquipmentElementComponent implements OnInit {

  @Input() item: FacilityEquipment;
  @Output() onRemove = new EventEmitter<FacilityEquipment>();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.onRemove.emit();
  }

}

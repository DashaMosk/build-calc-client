import { Component, OnInit } from '@angular/core';
import {FacilityEquipment} from '../../domain/facility_equipment';
import {EquipmentService} from '../../services/equipment.service';
import {ActivatedRoute} from '@angular/router';
import {Stuff} from '../../domain/stuff';

@Component({
  selector: 'app-facility-equipment-holder',
  templateUrl: './facility-equipment-holder.component.html',
  styleUrls: ['./facility-equipment-holder.component.css']
})
export class FacilityEquipmentHolderComponent implements OnInit {

  facilityId: number;
  facilityType: string;
  facilityEquipmentList: FacilityEquipment[];

  constructor(private route: ActivatedRoute, private equipmentService: EquipmentService) {
    this.facilityId = route.snapshot.params['id'];
    this.facilityType = route.snapshot.params['fType'];
    console.log(this.facilityId + ' ' + this.facilityType);
  }

  ngOnInit() {
    this.equipmentService.getFEquipments(this.facilityId)
      .subscribe(e => this.facilityEquipmentList = e,
        error2 => console.log(error2));
  }

  removeItem(item: FacilityEquipment) {
    this.facilityEquipmentList = this.facilityEquipmentList.filter(e => e.id !== item.id);
    this.equipmentService.deleteFEquipment(item.id)
      .subscribe(ok => console.log(ok), error2 => console.log(error2));
    console.log('Item was removed ' + item.id);
  }

  addFEquipment(stuff: Stuff) {
    console.log(this.facilityId);
    console.log(this.facilityType);
    this.equipmentService.postFEquipment(new FacilityEquipment(0, stuff, stuff.type, this.facilityId, this.facilityType))
      .subscribe(e => { this.facilityEquipmentList.push(e);  console.log('Element was added ' + e.stuff.name + ' ' + e.stuff.isClean); }
      , error2 => console.log(error2));
  }

}

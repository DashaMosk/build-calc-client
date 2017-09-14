import { Component, OnInit } from '@angular/core';
import {FacilityEquipment} from '../../domain/facility_equipment';
import {EquipmentService} from '../../services/equipment.service';
import {ActivatedRoute} from '@angular/router';
import {Stuff} from '../../domain/stuff';
import {RoomService} from '../../services/room.service';
import {Room} from '../../domain/room';
import {Wall} from '../../domain/wall';
import {WallService} from '../../services/wall.service';

@Component({
  selector: 'app-facility-equipment-holder',
  templateUrl: './facility-equipment-holder.component.html',
  styleUrls: ['./facility-equipment-holder.component.css']
})
export class FacilityEquipmentHolderComponent implements OnInit {

  facilityId: number;
  facilityType: string;
  facilityEquipmentList: FacilityEquipment[];
  facilityObjectId: number;
  roomObjectId: number;

  constructor(private route: ActivatedRoute, private equipmentService: EquipmentService, private roomService: RoomService,
              private wallService: WallService) {
    this.facilityId = route.snapshot.params['id'];
    this.facilityType = route.snapshot.params['fType'];
    console.log(this.facilityId + ' ' + this.facilityType);
  }

  ngOnInit() {
    this.equipmentService.getFEquipments(this.facilityId, this.facilityType)
      .subscribe(e => this.facilityEquipmentList = e, error2 => console.log(error2));
    if (this.facilityType === 'ROOM') {
      this.roomService.getRoom(this.facilityId)
        .subscribe(e => this.facilityObjectId = e.facility.id, error2 => console.log(error2));
    }
    if (this.facilityType === 'WALL') {
      this.wallService.getWall(this.facilityId)
        .subscribe(e => { this.facilityObjectId = e.room.facility.id; this.roomObjectId = e.room.id; }, error2 => console.log(error2));
    }
  }

  removeItem(item: FacilityEquipment) {
    this.facilityEquipmentList = this.facilityEquipmentList.filter(e => e.id !== item.id);
    this.equipmentService.deleteFEquipment(item.id)
      .subscribe(ok => console.log(ok), error2 => console.log(error2));
    console.log('Item was removed ' + item.id);
  }

  addFEquipment(stuff: Stuff) {
    this.equipmentService.postFEquipment(new FacilityEquipment(0, stuff, stuff.type, this.facilityId, this.facilityType))
      .subscribe(e => { this.facilityEquipmentList.push(e); }
      , error2 => console.log(error2));
  }

}

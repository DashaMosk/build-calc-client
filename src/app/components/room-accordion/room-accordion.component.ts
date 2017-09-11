import {Component, Input, OnInit} from '@angular/core';
import {RoomService} from '../../services/room.service';
import {Room} from '../../domain/room';
import {Result} from '../../domain/result';

@Component({
  selector: 'app-room-accordion',
  templateUrl: './room-accordion.component.html',
  styleUrls: ['./room-accordion.component.css']
})
export class RoomAccordionComponent implements OnInit {

  @Input() facilityId: number;
  @Input() calculation: Result[];
  roomList: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomList = new Array();
     this.roomService.getRooms(this.facilityId)
       .subscribe(rooms => { this.roomList = rooms; console.log(rooms); }
       , err => { console.log(err); });
  }

}

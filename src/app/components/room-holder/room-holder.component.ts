import { Component, OnInit } from '@angular/core';
import {Room} from '../../domain/room';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../../services/room.service';
import {Facility} from '../../domain/facility';

@Component({
  selector: 'app-room-holder',
  templateUrl: './room-holder.component.html',
  styleUrls: ['./room-holder.component.css']
})
export class RoomHolderComponent implements OnInit {

  facilityId: number;
  roomList: Room[];

  constructor(private route: ActivatedRoute, private roomService: RoomService) {
    this.facilityId = route.snapshot.params['id'];
  }


  ngOnInit() {
    this.roomService.getRooms(this.facilityId)
      .subscribe(rooms => this.roomList = rooms
        , err => console.log(err));
  }

  addRoom(room: Room) {
    room.facility = new Facility(this.facilityId, '', '');
    this.roomService.postRoom(room)
      .subscribe(fct => this.roomList.push(fct)
        , err => console.log(err));
    console.log('Room was added ' + room.height + ' ' + room.name);
  }

  deleteRoom(room: Room) {
    this.roomList = this.roomList.filter(e => e.id !== room.id);
    this.roomService.deleteRoom(room.id)
      .subscribe((ok) => console.log(ok)
      , err => console.log(err));
    console.log('Room was removed ' +  + room.id + ' ' + room.name);
  }

}



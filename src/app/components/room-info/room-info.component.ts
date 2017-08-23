import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Room} from '../../domain/room';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {

  @Input() room: Room;
  @Output() onDelete = new EventEmitter<Room>();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  deleteRoom(room: Room) {
    this.onDelete.emit(room);
  }
}

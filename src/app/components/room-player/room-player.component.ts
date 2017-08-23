import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../domain/room';

@Component({
  selector: 'app-room-player',
  templateUrl: './room-player.component.html',
  styleUrls: ['./room-player.component.css']
})
export class RoomPlayerComponent implements OnInit {

  @Input() roomLst: Room[];
  @Output() onDelete = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }

  deleteRoom(room: Room) {
    this.onDelete.emit(room);
  }

}

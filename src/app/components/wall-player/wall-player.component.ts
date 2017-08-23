import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wall} from '../../domain/wall';

@Component({
  selector: 'app-wall-player',
  templateUrl: './wall-player.component.html',
  styleUrls: ['./wall-player.component.css']
})
export class WallPlayerComponent implements OnInit {

  @Input() wallLst: Wall[];
  @Output() onDelete = new EventEmitter<Wall>();

  constructor() { }

  ngOnInit() {
  }

  deleteWall(wall: Wall) {
    this.onDelete.emit(wall);
  }

}

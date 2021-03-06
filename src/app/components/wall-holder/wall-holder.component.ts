import { Component, OnInit } from '@angular/core';
import {Wall} from '../../domain/wall';
import {WallService} from '../../services/wall.service';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../domain/room';

@Component({
  selector: 'app-wall-holder',
  templateUrl: './wall-holder.component.html',
  styleUrls: ['./wall-holder.component.css']
})
export class WallHolderComponent implements OnInit {
  roomId: number;
  facilityId: number;
  wallList: Wall[];

  constructor(private route: ActivatedRoute, private wallService: WallService) {
    this.facilityId = route.snapshot.params['facilityId'];
    this.roomId = route.snapshot.params['roomId'];
  }

  ngOnInit() {
    this.wallService.getWalls(this.roomId)
      .subscribe(walls => this.wallList = walls
        , err => console.log(err));
  }

  addWall(wall: Wall) {
    console.log(wall.forFloorCalculation);
    wall.room = new Room(this.roomId, '', 0, null);
    this.wallService.postWall(wall)
      .subscribe(wll => {this.wallList.push(wll); console.log('Wall was added ' + wll.name); }
        , err => console.log(err));
  }

  deleteWall(wall: Wall) {
    this.wallList = this.wallList.filter(e => e.id !== wall.id);
    this.wallService.deleteWall(wall.id)
      .subscribe((ok) => console.log(ok)
        , err => console.log(err));
    console.log('Wall was removed ' +  + wall.id + ' ' + wall.name);
  }


}

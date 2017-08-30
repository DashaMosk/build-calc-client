import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/primeng';
import {Room} from '../../domain/room';
import {WallService} from '../../services/wall.service';
import {ElementService} from '../../services/element.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-wall-card',
  templateUrl: './wall-card.component.html',
  styleUrls: ['./wall-card.component.css']
})
export class WallCardComponent implements OnInit {

  @Input() room: Room;
  selectedItem: any;

  data: TreeNode[];


  constructor(private wallService: WallService, private elementService: ElementService) { }

  ngOnInit() {
    this.getWalls();
  }

  getWalls() {
    this.data = [];
    let children: TreeNode[] = [];
    this.wallService.getWalls(this.room.id)
      .subscribe(walls => {
          for (const wall of walls) {
            Observable.forkJoin( [
              this.elementService.getApertures(wall.id),
              this.elementService.getDecorations(wall.id)
            ]).subscribe(elements => {
                children = [];
                for (const apt of elements[0]) { children.push({data: apt}); }
                for (const decor of elements[1]) { children.push({data: decor}); }
                this.data.push({data: wall, children: children});
              });
            } } , err => console.log(err));
  }
}

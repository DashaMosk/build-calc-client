import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/primeng';
import {Room} from '../../domain/room';
import {WallService} from '../../services/wall.service';
import {ElementService} from '../../services/element.service';

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
          this.elementService.getApertures(wall.id).subscribe(aperts => {
            children = [];
            for (const apt of aperts) { children.push({data: apt}); }
            this.elementService.getDecorations(wall.id).subscribe(decors => {
              for (const decor of decors) { children.push({data: decor}); }
              this.data.push({data: wall, children: children});
            });
          });
        }},
          err => console.log(err));
  }
}

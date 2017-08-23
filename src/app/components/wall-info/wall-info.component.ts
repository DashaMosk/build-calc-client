import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wall} from '../../domain/wall';
import {Element} from '../../domain/element';
import {Message} from 'primeng/primeng';
import {ElementService} from '../../services/element.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-wall-info',
  templateUrl: './wall-info.component.html',
  styleUrls: ['./wall-info.component.css']
})
export class WallInfoComponent implements OnInit {

  @Input() wall: Wall;
  @Output() onWallDelete = new EventEmitter<Wall>();

  msgs: Message[] = [];

  decorationList: Element[];
  apertureList: Element[];

  typeValue = true; // true-decoration, false-aperture

  type = '';
  height = 0;
  width = 0;
  display = false;

  constructor(private elementService: ElementService) {}

  results: string[];

  search(event) {
    if (this.typeValue) {
      this.results = ['tile', 'wallpaper'];
    } else {
      this.results = ['door', 'window'];
    }
  }

   ngOnInit() {
    this.elementService.getDecorations(this.wall.id)
      .subscribe(decors => this.decorationList = decors
        , err => console.log(err));
    this.elementService.getApertures(this.wall.id)
      .subscribe(apert => this.apertureList = apert
        , err => console.log(err));
  }

  deleteWall(wall: Wall) {
    this.onWallDelete.emit(wall);
  }

  showDialog() {
    this.clearFields();
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  validateFields() {
    this.msgs = [];

    if (this.type === '') {
      this.msgs.push({severity: 'warn', summary: 'Changes were not saved!' , detail: 'Field Name is required'});
    }
    if (!this.width) {
      this.msgs.push({severity: 'warn', summary: 'Changes were not saved!' , detail: 'Field Width is required'});
    }
    if (!this.height) {
      this.msgs.push({severity: 'warn', summary: 'Changes were not saved!' , detail: 'Field Height is required'});
    }
  }

  clearFields() {
    this.type = '';
    this.height = 0;
    this.width = 0;
  }

  saveElement() {
    this.validateFields();
    if ( this.msgs.length === 0) {
      this.display = false;
      if (this.typeValue) {
        this.elementService.postDecoration(new Element(0, this.type, this.height, this.width, this.wall))
          .subscribe(decor => {this.decorationList.push(decor); console.log('Decoration was added ' + decor.type); }
            , err => console.log(err));
      } else {
        this.elementService.postAperture(new Element(0, this.type, this.height, this.width, this.wall))
          .subscribe(apert => {this.apertureList.push(apert); console.log('Aperture was added ' + apert.type); }
            , err => console.log(err));
      }
      this.msgs.push({severity: 'success', summary: 'Success!', detail: 'Element was saved'});
    }
  }

  deleteDecoration(decoration: Element) {
    this.decorationList = this.decorationList.filter(e => e.id !== decoration.id);
    this.elementService.deleteDecoration(decoration.id)
      .subscribe(ok => console.log(ok), error => console.log(error));
    console.log('Decoration was removed ' +  + decoration.id + ' ' + decoration.type);

  }

  deleteAperture(aperture: Element) {
    this.apertureList = this.apertureList.filter(e => e.id !== aperture.id);
    this.elementService.deleteAperture(aperture.id)
      .subscribe(ok => console.log(ok), error => console.log(error));
    console.log('Apreture was removed ' +  + aperture.id + ' ' + aperture.type);
  }

}

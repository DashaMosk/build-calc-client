import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Element} from '../../domain/element';

@Component({
  selector: 'app-element-info',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.css']
})
export class ElementInfoComponent implements OnInit {

  @Input() decorations: Element[];
  @Input() apertures: Element[];
  @Output() onDecDelete = new EventEmitter<Element>();
  @Output() onApertDelete = new EventEmitter<Element>();

  constructor() { }

  ngOnInit() {
  }

  deleteDecoration(decor: Element) {
    this.onDecDelete.emit(decor);
  }

  deleteAperture(aperture: Element) {
    this.onApertDelete.emit(aperture);
  }

}

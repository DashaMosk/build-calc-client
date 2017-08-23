import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Wall} from '../../domain/wall';

@Component({
  selector: 'app-wall-adding',
  templateUrl: './wall-adding.component.html',
  styleUrls: ['./wall-adding.component.css']
})
export class WallAddingComponent implements OnInit {

  rForm: FormGroup;
  name: string;
  width: number;
  height: number;
  @Output() onPost = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.rForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'width': [null, Validators.required],
      'height': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  addWall(wall: Wall) {
    this.onPost.emit(wall);
    this.rForm.reset();
  }
}

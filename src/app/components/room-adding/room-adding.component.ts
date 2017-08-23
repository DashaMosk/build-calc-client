import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-adding',
  templateUrl: './room-adding.component.html',
  styleUrls: ['./room-adding.component.css']
})
export class RoomAddingComponent implements OnInit {

  rForm: FormGroup;
  name: string;
  height: number;
  @Output() onPost = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.rForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'height': [null]
    });
  }

  ngOnInit() {
  }

  addRoom(room) {
    this.onPost.emit(room);
    this.rForm.reset();
  }

}

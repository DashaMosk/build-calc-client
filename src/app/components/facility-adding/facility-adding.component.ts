import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../domain/facility';

@Component({
  selector: 'app-facility-adding',
  templateUrl: './facility-adding.component.html',
  styleUrls: ['./facility-adding.component.css']
})
export class FacilityAddingComponent implements OnInit {

  rForm: FormGroup;
  name = '';
  description = '';
  @Output() onPost = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.rForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null]
    });
  }

  addFacility(facility: Facility) {
    this.onPost.emit(facility);
    this.rForm.reset();
  }

  ngOnInit() {
  }

}

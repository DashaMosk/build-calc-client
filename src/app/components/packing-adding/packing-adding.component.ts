import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Package} from '../../domain/package';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-packing-adding',
  templateUrl: './packing-adding.component.html',
  styleUrls: ['./packing-adding.component.css']
})
export class PackingAddingComponent implements OnInit {

  @Output() onPost = new EventEmitter<any>();
  selectedUnit: string;
  units: string[];

  rForm: FormGroup;
  name: string;
  quantity: number;
  consumption: number;

  constructor(private formBuilder: FormBuilder) {
    this.rForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'unit': [null, Validators.required],
      'quantity': [null, Validators.required],
      'consumption': [null, Validators.required],
    });
  }

  ngOnInit() {
    this.units = ['KILO', 'METER2', 'METER'];
  }

  addPacking(packing: Package) {
    this.onPost.emit(packing);
    this.rForm.reset();
  }
}

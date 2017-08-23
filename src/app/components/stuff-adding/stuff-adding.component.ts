import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Stuff} from '../../domain/stuff';
import {Package} from '../../domain/package';
import {PackingService} from '../../services/packing.service';

@Component({
  selector: 'app-stuff-adding',
  templateUrl: './stuff-adding.component.html',
  styleUrls: ['./stuff-adding.component.css']
})
export class StuffAddingComponent implements OnInit {

  rForm: FormGroup;
  @Output() onPost = new EventEmitter<any>();

  packingList: Package[];
  selectedPackId: number;

  name: string;
  consumption: number;
  price: number;
  isClean = false;

  constructor(private formBuilder: FormBuilder, private packingService: PackingService) {
    this.rForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'packing': [null, Validators.required],
      'consumption': [null, Validators.required],
      'price': [null, Validators.required],
      'isClean': [null]
    });
  }

  ngOnInit() {
    this.packingService.getPacks().subscribe(packs => this.packingList = packs
    , error2 => console.log(error2));
  }

  addStuff(stuff: Stuff) {
    console.log('isClean ' + stuff.isClean);
    stuff.packing = this.returnPackById(this.selectedPackId);
    this.onPost.emit(stuff);
    this.rForm.reset();
  }

  returnPackById(id: number) {
    const tempPackingList = [...this.packingList];
    return tempPackingList.filter(e => { console.log(e.name + ' ' + id ); return  e.id === id; } ).pop();
  }

}

import { Component, OnInit } from '@angular/core';
import {PackingService} from '../../services/packing.service';
import {Package} from '../../domain/package';

@Component({
  selector: 'app-packing-holder',
  templateUrl: './packing-holder.component.html',
  styleUrls: ['./packing-holder.component.css']
})
export class PackingHolderComponent implements OnInit {

  packingList: Package[];
  constructor(private packingService: PackingService) { }

  ngOnInit() {
    this.packingList = [];
    this.packingService.getPacks().subscribe(packs => this.packingList = packs
    , error2 => console.log(error2));
  }

  addNewPack(pack: Package) {
    const packs = [...this.packingList];
    this.packingService.postPack(pack).subscribe(packing => {packs.push(packing);
    this.packingList = packs; }
    , error2 => console.log(error2));
    console.log('Pack was added ' + pack.name);
  }

}

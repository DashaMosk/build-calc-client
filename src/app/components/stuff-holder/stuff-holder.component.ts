import { Component, OnInit } from '@angular/core';
import {Stuff} from '../../domain/stuff';
import {StuffService} from '../../services/stuff.service';

@Component({
  selector: 'app-stuff-holder',
  templateUrl: './stuff-holder.component.html',
  styleUrls: ['./stuff-holder.component.css']
})
export class StuffHolderComponent implements OnInit {

  stuffList: Stuff[];
  constructor(private stuffService: StuffService) { }

  ngOnInit() {
    this.stuffService.getStuff().subscribe(stuff => this.stuffList = stuff
      , error2 => console.log(error2));
  }

  addNewStuff(stuff: Stuff) {
    const stuffLst = [...this.stuffList];
    console.log('isClean2 ' + stuff.isClean);
    this.stuffService.postStuff(stuff).subscribe(stf => {stuffLst.push(stf); this.stuffList = stuffLst; }
    , error2 => console.log(error2));
  }

  deleteStuff(stuff: Stuff) {
    this.stuffList = this.stuffList.filter(e => e.id !== stuff.id);
    this.stuffService.deleteStuff(stuff.id)
      .subscribe((ok) => console.log(ok)
        , err => console.log(err));
    console.log('Stuff was removed ' + stuff.id + stuff.name );
  }
}

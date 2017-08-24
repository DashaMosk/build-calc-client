import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Stuff} from '../../domain/stuff';
import {StuffService} from '../../services/stuff.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-facility-equipment-adding',
  templateUrl: './facility-equipment-adding.component.html',
  styleUrls: ['./facility-equipment-adding.component.css']
})
export class FacilityEquipmentAddingComponent implements OnInit {

  stuff: Stuff[];
  filteredStuff: Stuff[];
  stuffItem: Stuff;
  type = 'WALL';

  isClean = false;

  msgs: Message[] = [];
  @Output() onAdd = new EventEmitter<Stuff>();

  constructor(private stuffService: StuffService) { }

  ngOnInit() {
    this.stuffService.getStuff().subscribe(stuff => this.stuff = stuff,
      error2 => console.log(error2));
  }

  filterStuff(event) {
    this.filteredStuff = this.stuff
      .filter(stuff => stuff.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0
        && stuff.isClean === this.isClean);
  }

  handleDropdownClick() {
    this.filteredStuff = this.stuff;
  }

  addItem() {
    if (!this.stuffItem) {
      this.showWarn();
    } else {
      this.stuffItem.type = this.type;
      this.onAdd.emit(this.stuffItem);
      this.stuffItem = null;
    }
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({severity: 'warn', summary: 'Changes are not saved', detail: 'Fill the field'});
  }

}

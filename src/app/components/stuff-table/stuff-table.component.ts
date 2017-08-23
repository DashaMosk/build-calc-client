import {Component, Input, OnInit} from '@angular/core';
import {Stuff} from '../../domain/stuff';
import {StuffService} from '../../services/stuff.service';
import {Package} from '../../domain/package';

@Component({
  selector: 'app-stuff-table',
  templateUrl: './stuff-table.component.html',
  styleUrls: ['./stuff-table.component.css']
})
export class StuffTableComponent implements OnInit {

  @Input() stuffList: Stuff[];
  packs: Package[];

  constructor() { }

  ngOnInit() { }

}

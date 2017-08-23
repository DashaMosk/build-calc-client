import {Component, Input, OnInit} from '@angular/core';
import {Package} from '../../domain/package';

@Component({
  selector: 'app-packing-table',
  templateUrl: './packing-table.component.html',
  styleUrls: ['./packing-table.component.css']
})
export class PackingTableComponent implements OnInit {

  @Input() packageList: Package[];

  ngOnInit() {
  }
  constructor() {
  }

}

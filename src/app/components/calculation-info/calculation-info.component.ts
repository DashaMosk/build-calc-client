import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../domain/result';

@Component({
  selector: 'app-calculation-info',
  templateUrl: './calculation-info.component.html',
  styleUrls: ['./calculation-info.component.css']
})
export class CalculationInfoComponent implements OnInit {

  @Input() calculation: Result[];

  constructor() { }

  ngOnInit() {
  }

}

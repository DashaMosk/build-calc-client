import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import {DoubleFormatterPipe} from './double-formate-pipe';

@Directive({ selector: '[appDoubleFormatter]' })
export class DoubleFormatterDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: DoubleFormatterPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
  }

}

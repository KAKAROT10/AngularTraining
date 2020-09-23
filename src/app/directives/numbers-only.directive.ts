import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() { }

  @HostListener('keypress', ['$event'])
  restrictOnlyNumbers(ev: KeyboardEvent) {
    if (ev.keyCode < 48 || ev.keyCode > 58) {
      ev.preventDefault();
    }
  }

}

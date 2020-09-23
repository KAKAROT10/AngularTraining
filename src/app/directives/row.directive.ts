import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRow]'
})
export class RowDirective {

  constructor(private eRef: ElementRef) {
    const ele: HTMLElement = this.eRef.nativeElement;
    ele.className += ' ' + 'row';
  }

}

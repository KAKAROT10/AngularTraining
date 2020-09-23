import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

  @Input() appColumn: number = 12;

  constructor(private eRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    if (changes && changes.appColumn && changes.appColumn.currentValue) {
      const ele: HTMLElement = this.eRef.nativeElement;
      const colSize = 12 / this.appColumn;
      ele.className += ' ' + 'col-md-' + colSize;
    }
  }
  
}

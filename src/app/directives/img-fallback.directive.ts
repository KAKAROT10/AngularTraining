import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {

  @Input() appImgFallback: string;
  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  updateImage() {
    const imgEle: HTMLImageElement = this.eRef.nativeElement;
    imgEle.src = this.appImgFallback ||
    'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-stock-vector-no-image-available-icon-flat-vector-illustration.jpg';
    console.log(imgEle.src);
  }

}

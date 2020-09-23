import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'INR'): number {
    if (isNaN(value)) {
      return null;
    } else {
      return this.convertPrice(value, currencyCode);
    }
  }

  convertPrice(price: number, code: string) {
    switch (code) {
      case 'USD':
        return (price /= 70);
      case 'EUR':
        return (price /= 87);
      case 'GBP':
        return (price /= 78);
      case 'CAD':
        return (price /= 52);
      default:
        return price;
    }
  }
}

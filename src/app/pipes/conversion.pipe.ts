import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {}

  transform(value: number, currencyCode: string = 'INR'): number {
    if (isNaN(value)) {
      return null;
    } else {
      return this.convertPrice(value, currencyCode);
    }
  }

  convertPrice(price: number, code: string) {
    try {
      return (price*this.currencyService.getExchangeRate(code))/this.currencyService.getExchangeRate('INR');
    } catch {
      return price;
    }
  }
}

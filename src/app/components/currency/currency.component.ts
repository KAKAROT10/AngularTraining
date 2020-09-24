import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyActions } from 'src/app/_store/actions/currency.actions';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: []
})
export class CurrencyComponent implements OnInit {

  @Output() selected = new EventEmitter();

  currencyCodes: Array<string> = ['INR', 'USD', 'EUR', 'GBP', 'CAD'];

  constructor(
    private currencyService: CurrencyService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(
      (res) => {
        this.currencyCodes = Object.keys(res['rates']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  setCurrency(currency) {
    // sends data to parent (app) component
    // this.selected.emit(currency);
    this.currencyService.updateCurrency(currency);
    this.store.dispatch(CurrencyActions.updateCurrency({code: currency}));
  }

}

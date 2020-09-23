import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrencyService {

  private _code: string = 'INR';
  private baseUrl = "http://data.fixer.io/api/latest?access_key=f069f10015e564647230e66b68efc8f0";
  private rates = {};
  private currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable = this.currencySubject.asObservable();

  constructor(private http: HttpClient) { 
    this.http.get(this.baseUrl).subscribe(
      (res) => {
        this.rates = res['rates'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateCurrency(code: string) {
    this._code = code;
    this.currencySubject.next(this._code);
  }

  getCurrencies() {
    return this.http.get(this.baseUrl);
  }

  getExchangeRate(code: string) {
    return this.rates[code];
  }
}

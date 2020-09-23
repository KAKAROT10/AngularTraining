import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies() {
    const baseUrl = "http://data.fixer.io/api/latest?access_key=f069f10015e564647230e66b68efc8f0";
    return this.http.get(baseUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    const endPoint = "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
    return this.http.get<ProductModel[]>(endPoint);
  }
}

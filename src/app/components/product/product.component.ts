import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() pData: ProductModel = null;
  @Input() currencyCode: string;

  @Output() selectedProduct = new EventEmitter();

  imageFallback: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.selectedProduct.emit();
  }

}

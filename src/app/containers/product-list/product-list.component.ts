import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  @Input() currentCurrency: string;
  cartItems: Array<string> = [];

  pList: ProductModel[] = [
    {
    productId: 1000,
    productName: 'Product 1',
    productPrice: 12999.99,
    productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6TQVoxEVoNjal02T6DKQVJpK-nHbCSMKP2xtN4Gd3LB0B6aW_77n4z5uS6A&usqp=CAc',
    productStock: true
    },
    {
      productId: 1001,
      productName: 'Product 2',
      productPrice: 14999,
      productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgSRzK_Gk9KxqIdQrLKLMVbYSRx2Y7HkcKjg&usqp=CAU',
      productStock: true
    }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        // console.log(res);
        this.pList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  updateCart(data) {
    this.cartItems.push(data);
    console.log(this.cartItems);
  }

}

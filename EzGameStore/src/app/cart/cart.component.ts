import { Component, OnInit } from '@angular/core';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleCart(productName: string, productPrice: number) {
    console.log(productName)
    console.log(productPrice)
  }

  

}

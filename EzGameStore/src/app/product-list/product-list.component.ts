import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input("value") product: any;
   products: Array<any> = []
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(){
  this.productService.getAllProducts().subscribe({
  next: (response:any) => {
  this.products=response}
  });
  }
  handleBuy(event:Event){
  return this.cartService.addToCart(this.products)}
  }

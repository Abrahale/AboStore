import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';
import { CartItem, CartModel, mapToCartModels } from 'src/app/models/cartModel';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { LoadAddToCartAction } from 'src/app/store/cart/actions';
import {Router} from "@angular/router";
import { UpadateProductView } from 'src/app/store/products/actions';

@Component({
  selector: 'abo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: product = new product;
  constructor(private _store:Store<BaseStoreState.State>, private router: Router) { }

  ngOnInit(): void {
  }
  onClick(input:product):void{
    this._store.dispatch(new UpadateProductView(input))
    this.router.navigate(['/product/'+input._id+'/'+input.productCode])
  }
  addToCart(input:product):void{
    console.log('trying to add to cart')
    const cartItem = new CartItem();
    cartItem.product = input._id;
    cartItem.qty = 1;
    cartItem.active = true;
    this._store.dispatch(new LoadAddToCartAction({cartItem}));
  }
}

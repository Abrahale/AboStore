import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseStoreState, CartsSelectors, ProductsSelectors } from 'src/app/store';
import { LoadAddToCartAction } from 'src/app/store/cart/actions';
import {Router} from "@angular/router";
import { UpadateProductView } from 'src/app/store/products/actions';
import { product } from '../models/products';
import { CartItem } from '../../cart/models/cartModel';

@Component({
  selector: 'abo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  BUCKET_URI = "https://abostorebucket.s3.af-south-1.amazonaws.com/"
  @Input() product: product = new product;
  @Output() AddToCartClicked: EventEmitter<string> = new EventEmitter()
  isLoading$ = this._store.select(CartsSelectors.selectIsLoading)
  @Input() loadingButtons: Map<string,boolean>
  constructor(private _store:Store<BaseStoreState.State>, private router: Router) { }
  ngOnInit(): void {
  }
  onClick(input:product):void{
    this._store.dispatch(new UpadateProductView(input))
    this.router.navigate(['/product/'+input._id+'/'+input.productCode])
  }

  addToCart(input:product):void{
    const cartItem = new CartItem();
    cartItem.product = input._id;
    cartItem.qty = 1;
    cartItem.active = true;
    this._store.dispatch(new LoadAddToCartAction({cartItem}));
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';
import { CartModel, mapToCartModels } from 'src/app/models/cartModel';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { LoadAddToCartAction } from 'src/app/store/cart/actions';
import {Router} from "@angular/router";
import {UpadateProductView} from "../../../../store/products/actions";

@Component({
  selector: 'abo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product:product;
  constructor(private _store:Store<BaseStoreState.State>, private router: Router) { }

  ngOnInit(): void {
  }
  onClick(input):void{
    this._store.dispatch(new UpadateProductView(input))
    this.router.navigate(['/product/'+input._id+'/'+input.productCode])
  }
  addToCart(input):void{
    const cartModel = new CartModel();
    cartModel.id = input._id;
    cartModel.image = input.image;
    cartModel.price = input.price;
    cartModel.quanitity = 1,
    cartModel.title = input.title
    this._store.dispatch(new LoadAddToCartAction({cartModel}));
  }
}

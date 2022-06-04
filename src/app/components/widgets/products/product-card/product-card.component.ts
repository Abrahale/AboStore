import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';
import { CartModel, mapToCartModels } from 'src/app/models/cartModel';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { LoadAddToCartAction } from 'src/app/store/cart/actions';

@Component({
  selector: 'abo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product:product;
  constructor(private _store:Store<BaseStoreState.State>) { }

  ngOnInit(): void {
  }
  onClick(input):void{
    console.log('onclick',input)
  }
  addToCart():void{
    console.log('Add To Cart',this.product)
    const cartModel = new CartModel();
    cartModel._id = this.product._id;
    cartModel.imagePath = this.product.imagePath;
    cartModel.price = this.product.price;
    cartModel.quanitity = 1,
    cartModel.title = this.product.title
    console.log('CartModel',cartModel)
    this._store.dispatch(new LoadAddToCartAction({cartModel}));
  }
  wtf3(input):void{
    console.log('wtf3',input)
  }

}

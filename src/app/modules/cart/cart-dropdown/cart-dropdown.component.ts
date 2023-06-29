import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart';
import { BaseStoreState, CartsActions, CartsSelectors, SignInSelectors } from 'src/app/store';
import { UpadateProductView } from 'src/app/store/products/actions';
import { product } from '../../product/models/products';
import { CartItem, CartModel } from '../models/cartModel';

@Component({
  selector: 'abo-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {
  BUCKET_URI = "https://abostorebucket.s3.af-south-1.amazonaws.com/"
  totalItems$: Observable<any>;
  cartModel: CartModel = new CartModel;
  cartItem: CartItem[] = [];
  @Output() remove = new EventEmitter<string>()
  constructor(public cartService:CartService,
    private store$:Store<BaseStoreState.State>,private router:Router) {
    this.totalItems$ = this.store$.select(CartsSelectors.selectTotalItems);
  }

  ngOnInit() {
    //THIS KEEPS firing, needs to only fire once!
    this.store$.select(SignInSelectors.selectCartId).subscribe(id => {
      console.log(id)
      this.store$.dispatch(new CartsActions.LoadRequestAction({id}))
    })
    this.store$.select(CartsSelectors.selectData).subscribe(_ => {
      this.cartModel = _;
      this.cartItem = _.cartItem as CartItem[];
    })

  }

  removeItem(input:CartItem){
    this.store$.dispatch(new CartsActions.DeleteItemAction({cartId:this.cartModel._id,product_id:input.product._id,cartItem_id:input._id,remove:true}))
  }

  expandCart = ():void => {
      this.router.navigate(['cart']);
  }

  goToProductView = (input:CartItem)=>{
    this.store$.dispatch(new UpadateProductView(input.product))
    this.router.navigate(['/product/'+input._id+'/'+input.product.productCode])
  }

}

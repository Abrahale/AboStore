import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { CartItem, CartModel } from 'src/app/models/cartModel';
import { BaseStoreState, CartsActions, CartsSelectors, SignInSelectors } from 'src/app/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel: CartModel = new CartModel;
  total: number = 0;
  totalItems$: Observable<any>;
  constructor(private store$:Store<BaseStoreState.State>) {
    this.totalItems$ = this.store$.select(CartsSelectors.selectTotalItems);
  }
  
  ngOnInit(): void {
    
    this.store$.select(SignInSelectors.selectCartId).subscribe(id => {
      console.log(id)
      this.store$.dispatch(new CartsActions.LoadRequestAction({id}))
    })
    this.store$.select(CartsSelectors.selectData).subscribe(_ => {
      this.cartModel = _
    })
    // this.store$.select(CartsSelectors.selectTotal).subscribe(_ => {
    //   this.total=_;
    // })
  }
  qty_update = (pro_id:string,cartItem_id:string,inc:boolean) =>{
    this.store$.dispatch(new CartsActions.UpdateQuantity({cartId:this.cartModel._id,product_id:pro_id,cartItem_id:cartItem_id,inc:inc}))
  }
  removeCartItem = (id: any) =>{
    console.log('removing id: ',id)
  }
}

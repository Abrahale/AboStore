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
  qty_update = (id:string,inc = false) =>{
    let x = JSON.parse(JSON.stringify(this.cartModel));
    x.map((item: { _id: string; quanitity: number; }) =>{
      if(item._id === id){
       return inc ? item.quanitity ++ : item.quanitity --
      }
      return item
    })
    this.store$.dispatch(new CartsActions.UpdateItemAction(x))
  }
  removeCartItem = (id: any) =>{
    console.log('removing id: ',id)
  }
}

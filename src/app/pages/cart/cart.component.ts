import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem, CartModel } from 'src/app/models/cartModel';
import { BaseStoreState, CartsActions, CartsSelectors, SignInSelectors } from 'src/app/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel: CartModel;
  total: number;

  constructor(private store$:Store<BaseStoreState.State>) {
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
  qty_update = (id,inc = false) =>{
    let x = JSON.parse(JSON.stringify(this.cartModel));
    x.map(item =>{
      if(item._id === id){
       return inc ? item.quanitity ++ : item.quanitity --
      }
      return item
    })
    this.store$.dispatch(new CartsActions.UpdateItemAction(x))
  }
  removeCartItem = (id) =>{
    console.log('removing id: ',id)
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cartModel';
import { BaseStoreState, CartsActions, CartsSelectors } from 'src/app/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartModel: CartModel[];

  constructor(private store$:Store<BaseStoreState.State>) { }

  ngOnInit(): void {
    this.store$.select(CartsSelectors.selectCartItems).subscribe(_ => {
      this.cartModel = _
      console.log(_)
    })
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
}

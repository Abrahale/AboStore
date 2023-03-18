import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart';
import { BaseStoreState, CartsActions, CartsSelectors, SignInSelectors } from 'src/app/store';
import { CartItem, CartModel } from '../models/cartModel';

@Component({
  selector: 'abo-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {
  totalItems$: Observable<any>;
  cartModel: CartModel = new CartModel;
  cartItem: CartItem[] = [];
  @Output() remove = new EventEmitter<string>()
  constructor(public cartService:CartService,
    private store$:Store<BaseStoreState.State>) {
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

    console.log(this.cartItem)
  }

  removeItem(id:string){
    this.remove.emit(id)
  }

}

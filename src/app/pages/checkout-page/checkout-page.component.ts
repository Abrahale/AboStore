import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/modules/cart/models/cartModel';
import { BaseStoreState, CartsSelectors, SignInSelectors, CartsActions } from 'src/app/store';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  cartModel: CartModel = new CartModel;
  total: number = 0;
  totalItems$: Observable<any>;
  constructor(private store$:Store<BaseStoreState.State>) {
    this.totalItems$ = this.store$.select(CartsSelectors.selectTotalItems);
  }
  
  ngOnInit(): void {
    this.store$.select(SignInSelectors.selectCartId).subscribe(id => {
      this.store$.dispatch(new CartsActions.LoadRequestAction({id}))
    })
    this.store$.select(CartsSelectors.selectData).subscribe(_ => {
      console.log(_)
      this.cartModel = _
    })
  }
}

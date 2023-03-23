import { CartService } from 'src/app/services/cart';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseStoreState, CartsSelectors } from 'src/app/store';

@Component({
  selector: 'abo-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  cartQty$ = this.store$.select(CartsSelectors.selectTotalItems);
  cartTotal$ = this.store$.select(CartsSelectors.selectTotal);
  constructor(private store$:Store<BaseStoreState.State>,public cartService:CartService) { }

  ngOnInit() {

  }


}

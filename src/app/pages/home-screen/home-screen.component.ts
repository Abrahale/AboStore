import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { mapToProducts, product } from 'src/app/modules/product/models/products';
import { SideNavMainService } from 'src/app/services/sideNavMain.service';
import { ProductsSelectors, BaseStoreState, CartsSelectors } from 'src/app/store';
import { ProductsActions } from 'src/app/store/products';

@Component({
  selector: 'abo-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  response:any;
  products$: Subscription = new Subscription;
  products = this.store$.select(ProductsSelectors.selectData)
  constructor(private store$:Store<BaseStoreState.State>, public sideNavMainService:SideNavMainService) {
    this.store$.dispatch(new ProductsActions.LoadRequestAction())
   }
  ngOnInit(): void {
  }

  swipeLeft(event:any): void {
    console.log('Swiped', event);
  }

}

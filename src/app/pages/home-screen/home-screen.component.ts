import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { mapToProducts, product } from 'src/app/modules/product/models/products';
import { SideNavMainService } from 'src/app/services/sideNavMain.service';
import { ProductsSelectors, BaseStoreState } from 'src/app/store';
import { ProductsActions } from 'src/app/store/products';

@Component({
  selector: 'abo-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  response:any;
  products$: Subscription = new Subscription;
  products:product[]=[];
  constructor(private store$:Store<BaseStoreState.State>, public sideNavMainService:SideNavMainService) {
    this.store$.dispatch(new ProductsActions.LoadRequestAction())
   }
  ngOnInit(): void {
    this.products$ = this.store$.select(ProductsSelectors.selectData).subscribe(_ =>{
      if(_){
          _.forEach(e=>{
            this.products.push(mapToProducts(e))
          })
        }
    });
  }

  swipeLeft(event:any): void {
    console.log('Swiped', event);
  }

}

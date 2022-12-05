import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { mapToProducts, product } from 'src/app/models/products';
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
  constructor(private store$:Store<BaseStoreState.State>) {
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
}

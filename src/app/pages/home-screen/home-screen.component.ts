import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { ProductsActions } from 'src/app/store/products';

@Component({
  selector: 'abo-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  response:any;
  constructor(private store:Store<BaseStoreState.State>,) { }
  ngOnInit(): void {
    this.store.dispatch(new ProductsActions.LoadRequestAction())
  }
}

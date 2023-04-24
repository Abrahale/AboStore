import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/products.service';
import { BaseStoreState, ProductsActions, ProductsSelectors } from 'src/app/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$;
  isEditMode: boolean;
  constructor(private productService:ProductService, private store$:Store<BaseStoreState.State>){
    this.store$.dispatch(new ProductsActions.LoadRequestAction());
  }

  ngOnInit(): void {
    this.products$ = this.store$.select(ProductsSelectors.selectData);
  }
  editDepartment(input:any){
    this.isEditMode = true
  }


}

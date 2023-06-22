import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/products.service';
import { BaseStoreState, ProductsActions, ProductsSelectors } from 'src/app/store';
import { AddproductComponent } from './add-product/add-product.component';
import { ActivatedRoute, Router } from '@angular/router';
export interface MatDialoData{
  title:string,
  description:string,
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$;
  isEditMode: boolean;
  proToEdit: MatDialoData;
  constructor(private dialog:MatDialog, private store$:Store<BaseStoreState.State>, private router:Router, public route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.products$ = this.store$.select(ProductsSelectors.selectData);
  }
  onEditClick(input:any){
    this.isEditMode = true
  }
  
  addNewProduct():void{
    this.router.navigate(['/cms', { outlets: { 'abo-admin': ['edit-product'] } }]);
  }

  removeProduct(id:string){
    this.store$.dispatch(new ProductsActions.RemoveProductActionRequest(id))
  }


}

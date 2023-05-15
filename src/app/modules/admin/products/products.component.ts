import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/products.service';
import { BaseStoreState, ProductsActions, ProductsSelectors } from 'src/app/store';
import { CreateProductStep1Component } from './create-product-step-1/create-product-step-1.component';
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
  constructor(private dialog:MatDialog, private store$:Store<BaseStoreState.State>){

  }

  ngOnInit(): void {
    this.products$ = this.store$.select(ProductsSelectors.selectData);
  }
  onEditClick(input:any){
    this.isEditMode = true
    this.dialog.open(CreateProductStep1Component,{data:input})
  }

  addNewProduct():void{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false
    dialogConfig.autoFocus = false
    dialogConfig.position = {
      'top':'25%',
      'left':'42%'
    }
    dialogConfig.data = {'description':'Hi John'}

    this.dialog.open(CreateProductStep1Component)
  }

}

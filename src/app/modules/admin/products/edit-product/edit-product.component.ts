import { Component, Input, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/modules/cart/models/cartModel';
import { product } from 'src/app/modules/product/models/products';
import { BaseStoreState, ProductsSelectors } from 'src/app/store';
import { IProductForm } from 'src/app/modules/models/_product_form';

@Component({
  selector: 'abo-edit-product',
  templateUrl: './edit-product.html',
  styleUrls: ['./edit-product.scss']
})
export class EditProductComponent implements OnInit {
  BUCKET_URI = "https://abostorebucket.s3.af-south-1.amazonaws.com/"
  @Input()
  product;
  colorForm!: UntypedFormGroup;
  imagePath = "";

  productToEdit;
  constructor(
    private store$:Store<BaseStoreState.State>,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.store$.select(ProductsSelectors.selectFormProduct).subscribe(data =>{
      this.product = data 
      this.imagePath = this.BUCKET_URI+data.image[0];
    })
    this.colorForm = this.formBuilder.group({
      color:['red']
    })
  }

  activeImage(imgsrc:string = ""):void{
    this.imagePath = this.BUCKET_URI+imgsrc;
  }

  addToCart():void{

    const cartItem = new CartItem();
    cartItem.product = this.product._id;
    cartItem.qty = 1,
    cartItem.active = true
   // this._store.dispatch(new LoadAddToCartAction({cartItem}));
  }


}

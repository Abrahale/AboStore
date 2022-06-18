import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';
import {BaseStoreState, ProductsSelectors} from "../../store";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'abo-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() product:product;
  colorForm: FormGroup;
  imagePath = "assets/images/red.png";
  constructor(private _store:Store<BaseStoreState.State>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._store.select(ProductsSelectors.selectproductView).subscribe((_) => {
      this.product = _;
    })
    this.colorForm = this.formBuilder.group({
      color:['red']
    })
  }
  activeImage():void{
    switch (this.colorForm.getRawValue().color){
      case "red":
         this.imagePath = "assets/images/red.png";
         break;
     case "blue":
         this.imagePath = "assets/images/blue.png";
         break;      
     case "black":
         this.imagePath = "assets/images/black.png";
         break;
    }
  }

}

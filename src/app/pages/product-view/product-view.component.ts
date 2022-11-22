import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';
import {BaseStoreState, ProductsSelectors} from "../../store";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'abo-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() product:product;
  colorForm: FormGroup;
  imagePath = "";
  constructor(
    private _store:Store<BaseStoreState.State>,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._store.select(ProductsSelectors.selectproductView).subscribe((_) => {
      this.product = _;
      this.imagePath = _.image[0];
    })
    this.colorForm = this.formBuilder.group({
      color:['red']
    })
    console.log(this.activatedRoute.snapshot.params['productCode']);
    console.log(this.product)
  }
  activeImage(imgsrc):void{
    console.log('the imge src',imgsrc)
    this.imagePath = imgsrc;
  }

}

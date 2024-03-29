import { Component, Input, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/modules/cart/models/cartModel';
import { product } from 'src/app/modules/product/models/products';
import { BaseStoreState, ProductsSelectors } from 'src/app/store';
import { ITab } from 'src/app/modules/models/ITab.model';

@Component({
  selector: 'abo-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input()
  product: product = new product;
  colorForm!: UntypedFormGroup;
  imagePath = "";
  constructor(
    private _store:Store<BaseStoreState.State>,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._store.select(ProductsSelectors.selectproductView).subscribe((_) => {
      this.product = _;
      this.imagePath = _?.image[0];
    })
    this.colorForm = this.formBuilder.group({
      color:['red']
    })
    console.log(this.activatedRoute.snapshot.params['productCode']);
    console.log(this.product)
  }
  activeImage(imgsrc:string = ""):void{
    console.log('the imge src',imgsrc);
    this.imagePath = imgsrc;
  }

  get moreProductDetails():{}[]{
    return [
      {
        title:"Description",
        content:this.product.description,
        type:Array
      },
      {
        title : "Feature List",
        content: this.product.featureList.length > 0 ? this.product.featureList : null,
        type:Array
      },
      {
        title:"Specifications",
        content:this.product.specifications.length > 0 ? this.product.specifications : null,
        type:Array
      }
    ]

  }

  addToCart():void{

    const cartItem = new CartItem();
    cartItem.product = this.product._id;
    cartItem.qty = 1,
    cartItem.active = true
   // this._store.dispatch(new LoadAddToCartAction({cartItem}));
  }


}

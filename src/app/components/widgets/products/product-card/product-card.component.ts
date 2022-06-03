import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';

@Component({
  selector: 'abo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product:product;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(input):void{
    console.log('onclick',input)
  }
  addToCart(input):void{
    console.log('Add To Cart',input)
  }
  wtf3(input):void{
    console.log('wtf3',input)
  }

}

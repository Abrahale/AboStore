import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/products';

@Component({
  selector: 'abo-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() product:product;
  constructor() { }

  ngOnInit(): void {
  }
  wtf(input):void{
    console.log('wtf',input)
  }
  wtf2(input):void{
    console.log('wtf2',input)
  }
  wtf3(input):void{
    console.log('wtf3',input)
  }

}

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

}

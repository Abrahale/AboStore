import { Component, Input, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { product, mapToProducts } from 'src/app/models/products';

@Component({
  selector: 'abo-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  start = 0;
  end=5;
  @Input() products:product[]=[];
  @Input() slider=[];
  constructor() {
    console.log(this.products)
  }

  ngOnInit(): void {
    this.move(this.start,this.end)
  }
  next():void{
    this.start++;
    this.end++;
    if(this.end == this.products.length){
      this.start = 0;
      this.end=5;
    }
    this.move(this.start,this.end);
  }
  prev():void{
    this.start--;
    this.end--;
    if(this.start < 0){
      this.start = this.products.length-5;
      this.end= this.products.length;
    }
    this.move(this.start,this.end);
  }
  move(start:number,end:number):void{
    this.slider = this.products.slice(start,end)
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartModel } from 'src/app/models/cartModel';
import { product } from 'src/app/models/products';

@Component({
  selector: 'abo-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: product //Don't forget to make it Product
  @Input() qty:number = 1;
  @Output() decrement = new EventEmitter<string>()
  @Output() increment = new EventEmitter<string>()
  @Output() remove = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    
  }

  onDecrement(id){
    this.decrement.emit(id);
  }

  onIncrement(id){
    this.increment.emit(id);
  }

  removeItem(id){
    this.remove.emit(id)
  }


}

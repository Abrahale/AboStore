import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart';

@Component({
  selector: 'abo-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {
  inlineDisplay = false;
  constructor(public cartService:CartService) { }

  ngOnInit() {
  }

}

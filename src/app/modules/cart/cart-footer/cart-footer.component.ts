import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'abo-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.scss']
})
export class CartFooterComponent implements OnInit {
  @Input() subTotal:number = 1;
  @Input() tax=15;
  @Input() shipping=15;
  @Input() totalItems = 10;
  totalTax=0;
  constructor() { }

  ngOnInit(): void {
    this.totalTax = this.subTotal * 15/100;
  }

}

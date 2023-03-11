import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartDropdownComponent,
    CartFooterComponent,
    CartIconComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    CartDropdownComponent,
    CartFooterComponent,
    CartIconComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(cartRoutes),
  ],
  exports:[
    CartDropdownComponent,
    CartFooterComponent,
    CartIconComponent,
    CartItemComponent,
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';


const routes: Routes = [
  { path: '', component: CartDropdownComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: CartDropdownComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
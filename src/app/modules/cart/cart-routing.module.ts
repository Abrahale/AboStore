import { Routes, RouterModule } from '@angular/router';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';


export const cartRoutes: Routes = [
  { path: '', component: CartComponent },
  { path: ':id/:cart_id', component: CartDropdownComponent }
];

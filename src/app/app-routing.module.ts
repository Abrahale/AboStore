import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import {CartComponent} from "./pages/cart/cart.component";

const productModule = () => import('./modules/product/product.module').then(m=>m.ProductModule);
const customerModule = () => import('./modules/customer/customer.module').then(m=>m.CustomerModule);
const cartModule = () => import('./modules/cart/cart.module').then(m=>m.CartModule);

const routes: Routes = [
  {
    path:'',
    component: HomeScreenComponent,
    children:[
        {
          path:'product',
          loadChildren:productModule
        },
        {
          path:'customers',
          loadChildren:customerModule
        },
        {
          path:'cart',
          loadChildren: cartModule
        }
    ]
  },
  {
    path:'home',
    component: HomeScreenComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

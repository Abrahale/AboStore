import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { AdminComponent } from './modules/admin/admin.component';
import { AuthGuard } from './Guards/authGuard.guard';
import { CheckoutModule } from './modules/checkout/checkout.module';

const productModule = () => import('./modules/product/product.module').then(m=>m.ProductModule);
const customerModule = () => import('./modules/customer/customer.module').then(m=>m.CustomerModule);
const cartModule = () => import('./modules/cart/cart.module').then(m=>m.CartModule);
const adminModule = () => import('./modules/admin/admin.module').then(m => AdminModule)
const checkoutModule = () => import('./modules/checkout/checkout.module').then(m=>CheckoutModule)
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path:'home',
    component: HomeScreenComponent,
  },
  { 
    path:'cms',
    component:AdminComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        loadChildren:adminModule
      }
    ],

  },
  {
    path:'cart',
    children:[
      {
      path:'',
      loadChildren:cartModule
    }]
  },
  {
    path:'customers',
    children:[{
      path:'',
      loadChildren:customerModule
    }]
  },
  {
    path:'check-out',
    children:[{
      path:'',
      loadChildren:checkoutModule
    }]
  },
  {
    path:'product',
    children:[{
      path:'',
      loadChildren:productModule
    }]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

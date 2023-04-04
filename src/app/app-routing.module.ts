import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './modules/admin/admin.module';

const productModule = () => import('./modules/product/product.module').then(m=>m.ProductModule);
const customerModule = () => import('./modules/customer/customer.module').then(m=>m.CustomerModule);
const cartModule = () => import('./modules/cart/cart.module').then(m=>m.CartModule);
const adminModule = () => import('./modules/admin/admin.module').then(m => AdminModule)

const routes: Routes = [
  {
    path:'home',
    component: HomeScreenComponent,
    // children:[
    //     {
    //       path:'product',
    //       loadChildren:productModule
    //     },

    //     {
    //       path:'cart',
    //       loadChildren: cartModule
    //     }
    // ]
  },
  {
    path:'cart',
    children:[{
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
    path:'product',
    children:[{
      path:'',
      loadChildren:productModule
    }]
  },
  {
    path:'admin',
    children:[{
      path:'',
      loadChildren:adminModule
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

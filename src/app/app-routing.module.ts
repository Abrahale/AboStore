import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/home-screen/cart/cart.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductViewComponent } from './components/widgets/products/product-view/product-view.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';

const routes: Routes = [
  {
    path:'',
    component: HomeScreenComponent
  },
  {
    path:'home',
    component: HomeScreenComponent
  },
  {
    path:'sign-in',
    component: SignInComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'product-view',
    component: ProductViewComponent
  },
  {
    path:'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

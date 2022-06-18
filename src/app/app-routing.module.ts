import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import {ProductViewComponent} from "./pages/product-view/product-view.component";
import {CartComponent} from "./pages/cart/cart.component";

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

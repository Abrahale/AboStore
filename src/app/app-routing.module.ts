import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from 'projects/abo-store-admin/src/app/app.module';
import { AdminLayoutComponent } from 'projects/abo-store-admin/src/app/layouts/admin-layout/admin-layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductViewComponent } from './components/widgets/products/product-view/product-view.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('projects/abo-store-admin/src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AdminModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

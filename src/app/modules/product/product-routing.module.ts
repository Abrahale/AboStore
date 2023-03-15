import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  { path: '', component: ProductViewComponent },
  { path: ':id', component: ProductViewComponent },
  {
    path:':id/:productCode',
    component: ProductViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

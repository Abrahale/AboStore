import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';


export const productRoutes: Routes = [
  { path: '', component: ProductViewComponent },
  {
    path:':id/:productCode',
    component: ProductViewComponent
  },
];


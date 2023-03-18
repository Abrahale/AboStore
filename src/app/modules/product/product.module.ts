import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { productRoutes } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductViewComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    ComponentsModule,
    SharedModule
  ],
  exports:[
    ProductViewComponent,
    ProductCardComponent
  ]
})
export class ProductModule { }

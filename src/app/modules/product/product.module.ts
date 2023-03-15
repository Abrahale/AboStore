import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductViewComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    ComponentsModule
  ],
  exports:[
    ProductViewComponent,
    ProductCardComponent
  ]
})
export class ProductModule { }

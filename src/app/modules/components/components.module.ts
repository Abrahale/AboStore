import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SaleTagComponent } from './sale-tag/sale-tag.component';
import { HeartTagComponent } from './heart-tag/heart-tag.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent
  ]
})
export class ComponentsModule { }

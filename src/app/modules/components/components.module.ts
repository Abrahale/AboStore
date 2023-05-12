import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SaleTagComponent } from './sale-tag/sale-tag.component';
import { HeartTagComponent } from './heart-tag/heart-tag.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SharedModule } from '../shared/shared.module';
import { TextInputComponent } from './text-input/text-input.component';
import { TableComponent } from './table/table.component';
import { CoursesService } from '../admin/services/course.service';
import { InputDateComponent } from './input-date/input-date.component';
import { LongTextInputComponent } from './long-text-input/long-text-input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent,
    RadioButtonComponent,
    TextInputComponent,
    TableComponent,
    InputDateComponent,
    LongTextInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent,
    RadioButtonComponent,
    TextInputComponent,
    TableComponent,
    InputDateComponent,
    LongTextInputComponent
  ],
  providers:[
    CoursesService
  ]
})
export class ComponentsModule { }
//import { NgModule } from '@angular/core';
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
import { KeyValuePairComponent } from './form-builders/key-value-pair/key-value-pair';
import { KeyValuesComponent } from './form-builders/key-values/key-values';
import { DynamicTabsViewComponent } from './dynamic-tabs-view/dynamic-tabs-view.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    ButtonComponent,
    SaleTagComponent,
    HeartTagComponent,
    RadioButtonComponent,
    TextInputComponent,
    TableComponent,
    InputDateComponent,
    LongTextInputComponent,

    //form-builder-helpers
    KeyValuePairComponent,
    KeyValuesComponent,
    DynamicTabsViewComponent,
    
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
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
    LongTextInputComponent,
        //form-builder-helpers
    KeyValuePairComponent,
    KeyValuesComponent,
    DynamicTabsViewComponent
  ],
  providers:[
    CoursesService
  ]
})
export class ComponentsModule { }

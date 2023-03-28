import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from './services/department.service';
import { CategoryService } from './services/category.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    DepartmentService,
    CategoryService
  ]
})
export class AdminModule { }

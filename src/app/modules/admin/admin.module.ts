import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from './services/department.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule,
    ComponentsModule,
  ],
  providers:[
    DepartmentService,
    CategoryService
  ]
})
export class AdminModule { }

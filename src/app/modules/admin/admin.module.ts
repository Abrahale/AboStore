import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from './services/department.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateDepartmentComponent } from './department/create-department.component';
import { CreateDepartmentStep2Component } from './department/create-department-step-2/create-department-step-2.component';
import { CreateDepartmentStep1Component } from './department/create-department-step-1/create-department-step-1.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateDepartmentComponent,
    CreateDepartmentStep2Component,
    CreateDepartmentStep1Component
  ],
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

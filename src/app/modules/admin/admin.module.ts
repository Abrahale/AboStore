import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from './services/department.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule, adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { DepartmentComponent } from './department/department.component';
import { CreateProductStep2Component } from './products/create-product-step-2/create-product-step-2.component';
import { CreateProductStep1Component } from './products/create-product-step-1/create-product-step-1.component';
import { CategoryComponent } from './category/category.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material/dialog';
import { FormControlPipe } from 'src/app/pipes/FormControlPipe';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DepartmentComponent,
    CreateProductStep2Component,
    CreateProductStep1Component,
    CategoryComponent,
    ProductsComponent,
    BrandComponent,
    CreateDepartmentComponent,
    FormControlPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  providers:[
    DepartmentService,
    CategoryService,
  ],
  entryComponents:[
    CreateDepartmentComponent
  ]
})
export class AdminModule { }

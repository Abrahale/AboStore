import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from './services/department.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brand/brand.component';
import { DepartmentComponent } from './department/department.component';
import { CreateProductStep2Component } from './products/create-product-step-2/create-product-step-2.component';
import { CreateProductStep1Component } from './products/create-product-step-1/create-product-step-1.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DepartmentComponent,
    CreateProductStep2Component,
    CreateProductStep1Component,
    CategoryComponent,
    ProductsComponent,
    BrandComponent
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

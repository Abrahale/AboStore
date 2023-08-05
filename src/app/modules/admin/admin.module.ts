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
import { CategoryComponent } from './category/category.component';
import { FormControlPipe } from 'src/app/pipes/FormControlPipe';
import { AdminComponent } from './admin.component';
import { DialogDataExampleDialog, DialogDataExample } from './dialog-example/dialogDataExample.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { CreateManufacturerComponent } from './manufacturer/create-manufacturer/create-manufacturer.component';
import { AddproductComponent } from './products/add-product/add-product.component';
import { AdminProductService } from './services/product.service';
import { EditProductComponent } from './products/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DepartmentComponent,
    AddproductComponent,
    EditProductComponent,
    ProductsComponent,
    CategoryComponent,
    BrandComponent,
    CreateDepartmentComponent,
    FormControlPipe,
    DialogDataExampleDialog,
    DialogDataExample,
    CreateCategoryComponent,
    UsersComponent,
    CreateUserComponent,
    ManufacturerComponent,
    CreateManufacturerComponent
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
    AdminProductService
  ]
})
export class AdminModule { }

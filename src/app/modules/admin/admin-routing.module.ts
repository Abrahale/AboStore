import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { BrandComponent } from './brand/brand.component';
import { NgModule } from '@angular/core';



export const adminRoutes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'departments',
        component: DepartmentComponent
    },
    {
        path:'categories',
        component: CategoryComponent
    },
    {
        path:'products',
        component:ProductsComponent,
        
    },
    {
        path:'brands',
        component: BrandComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }

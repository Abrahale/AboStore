import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { BrandComponent } from './brand/brand.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';



export const adminRoutes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent,
        outlet:'abo-admin'
    },
    {
        path:'users',
        component:UsersComponent,
        outlet:'abo-admin'
    },
    {
        path:'departments',
        component: DepartmentComponent,
        outlet:'abo-admin'
    },
    {
        path:'categories',
        component: CategoryComponent,
        outlet:'abo-admin'
    },
    {
        path:'products',
        component:ProductsComponent,
        outlet:'abo-admin'
    },
    {
        path:'brands',
        component: BrandComponent,
        outlet:'abo-admin'
    },
    {
        path:'manufacturer',
        component: BrandComponent,
        outlet:'abo-admin'
    }
];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }

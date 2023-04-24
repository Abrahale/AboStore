import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';



export const adminRoutes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'department',
        component: DepartmentComponent
    },
    {
        path:'categories',
        component: CategoryComponent
    },
    {
        path:'products',
        component:ProductsComponent
    }
];

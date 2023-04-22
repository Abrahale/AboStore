import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';



export const adminRoutes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'department',
        component: DepartmentComponent
    }
];

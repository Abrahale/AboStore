import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



export const adminRoutes: Routes = [
    {path:'dashboard',
    component:DashboardComponent
    }
];

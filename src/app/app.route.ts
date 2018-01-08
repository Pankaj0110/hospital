import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes:Routes = [
{ path:'', pathMatch:'full', redirectTo:'dashboard' },
{ path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'}
];
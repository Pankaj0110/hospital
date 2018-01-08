import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from '../authentication/authentication.module';
import { routes } from './dashboard.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthenticationModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

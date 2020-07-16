import { AuthGuard } from './services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { 
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    canActivate: [ AuthGuard]

  },
  { path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


export const customerRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent }
];

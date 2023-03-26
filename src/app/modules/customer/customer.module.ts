import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { customerRoutes } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from '../components/components.module';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    UserIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
    ComponentsModule

  ],

  exports:[
    UserIconComponent
  ]

})
export class CustomerModule { }

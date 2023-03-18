import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartDropdownDirective } from './Directives/cart-dropdown.directive';
import { ShowHideDirective } from './Directives/show-hide.directive';

import { customerRoutes } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    CartDropdownDirective,
    ShowHideDirective,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    SharedModule,
    ComponentsModule

  ],
  exports:[
    ShowHideDirective,
  ]
})
export class CustomerModule { }

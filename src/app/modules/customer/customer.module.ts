import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { CartDropdownDirective } from './Directives/cart-dropdown.directive';
import { ShowHideDirective } from './Directives/show-hide.directive';
import { ComponentsModule } from '../components/components.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { customerRoutes } from './customer-routing.module';

@NgModule({
  declarations: [
    CartDropdownDirective,
    ShowHideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
    MatSlideToggleModule

  ],
  exports:[
    ShowHideDirective
  ]
})
export class CustomerModule { }

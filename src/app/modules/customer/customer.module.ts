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



@NgModule({
  declarations: [
    CartDropdownDirective,
    ShowHideDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class CustomerModule { }

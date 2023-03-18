import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CartDropdownDirective } from './Directives/cart-dropdown.directive';
import { ShowHideDirective } from './Directives/show-hide.directive';
import { CurrencyPipe } from './pipes/currency.pipe';



@NgModule({
  declarations: [
    CartDropdownDirective,
    ShowHideDirective,
    CurrencyPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports:[
    //Third party modules

    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,

    //Directives
    CartDropdownDirective,
    ShowHideDirective,

    //pipes
    CurrencyPipe,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {  MatRadioModule } from '@angular/material/radio';
import { CartDropdownDirective } from './Directives/cart-dropdown.directive';
import { ShowHideDirective } from './Directives/show-hide.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { DialogBaseComponent } from './components/dialog-base/dialog-base.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CartDropdownDirective,
    ShowHideDirective,
    CurrencyPipe,
    DialogBaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,

    //testing
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports:[
    //Third party modules

    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    //Directives
    CartDropdownDirective,
    ShowHideDirective,

    //pipes
    CurrencyPipe,

    //components
    DialogBaseComponent

    //providers
  ],
  providers:[
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
          closeOnNavigation: true,
          hasBackdrop: false,
          width: '100%',
          maxWidth: '690px',
          minWidth: '280px',
          panelClass: ['p-3', 'mat-modal-height-fix'],
          maxHeight: '100%',
          minHeight: 'fit-content',
          padding: '15px',
      },
    },
  ],
  entryComponents: [
    //DialogComponent
]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {  MatRadioModule } from '@angular/material/radio';

import { CurrencyPipe } from './pipes/currency.pipe';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule,MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoadingService } from './services/loading.service';
import { MessageService } from './services/message.service';
import { FileUploadComponent } from './components/file-uploads/file-upload.component';
import { FileUploadService } from './services/file-upload.service';

@NgModule({
  declarations: [
    CurrencyPipe,
    DialogBaseComponent,
    FileUploadComponent,
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
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSlideToggleModule,

    //testing
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,

    //Shared Custome Components
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
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    //Directives

    //pipes
    CurrencyPipe,

    //components
    DialogBaseComponent,
    FileUploadComponent,
    //providers
    
  ],
  providers:[
    LoadingService,
    MessageService,
    FileUploadService
  ],

})
export class SharedModule { }



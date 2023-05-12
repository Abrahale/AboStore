import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogBaseComponent } from 'src/app/modules/shared/components/dialog-base/dialog-base.component';
import { LoadingService } from 'src/app/services/loading.service';
import { BaseStoreState, ProductsActions } from 'src/app/store';
import { CategoryActions } from 'src/app/store/category';
import { DepartmentActions } from 'src/app/store/department';
//import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';

@Component({
  selector: 'abo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private dialog:MatDialog, private store$:Store<BaseStoreState.State>){

    }

  ngOnInit(): void {
  }
  openDialog = ():void =>{
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false
    dialogConfig.autoFocus = false
    dialogConfig.position = {
      'top':'25%',
      'left':'42%'
    }
    dialogConfig.data = {'description':'Hi John'}

    this.dialog.open(DialogBaseComponent)

  }
}

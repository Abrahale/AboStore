import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateDepartmentComponent } from './create-department/create-department.component';

@Component({
  selector: "abo-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit{
  subscription$! : Subscription;
  departments$! : Observable<any>;
  isEditMode = false;
  constructor(private dialog:MatDialog, private store$:Store<BaseStoreState.State>){
    //this.store$.dispatch(new DepartmentActions.LoadRequestAction());
  }
  ngOnInit(): void {
    this.departments$ = this.store$.select(DepartmentSelectors.selectData);
  }

  editDepartment(input:any){
    this.isEditMode = true
    this.dialog.open(CreateDepartmentComponent,{data:{isEdit:true, preFil:input}})
  }


  addNewDepartment(){
     this.dialog.open(CreateDepartmentComponent)
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { Dialog } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
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
  constructor(private dialog:Dialog, private store$:Store<BaseStoreState.State>){
    //this.store$.dispatch(new DepartmentActions.LoadRequestAction());
    console.log('Department page')
  }
  ngOnInit(): void {
    this.departments$ = this.store$.select(DepartmentSelectors.selectData);
  }
  openDialog() {
    this.dialog.open(CreateDepartmentComponent, {
      data: {
        animal: 'panda',
        name:'Abrahale Kiros'
      },
    });
  }
  editDepartment(input:any){
    this.isEditMode = true
    this.dialog.open(CreateDepartmentComponent,{data:input})
  }


  addNewDepartment(){
     this.dialog.open(CreateDepartmentComponent)
  }
}

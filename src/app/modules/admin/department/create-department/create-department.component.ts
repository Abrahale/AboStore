import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { DepartmentActions } from 'src/app/store/department';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  
  @Input() department={dep_name:'',dep_des:''}
  @ViewChild("departmentForm") departmentForm:NgForm;
  @Input() isEditMode = false;

  constructor(private store$:Store<BaseStoreState.State>,public dialogRef: MatDialogRef<CreateDepartmentComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData){}

  onSubmit() {
    if(!this.isEditMode){
      this.store$.dispatch(new DepartmentActions.AddNewDepartmentAction(this.departmentForm.value))
    }
    else{
      console.log('Still to be implemented, dispatch action for edit')
    }
    this.clearForm()
  }

  ngOnInit(): void {
    console.log('Why data is always empty?',this.data)
  }

  clearForm():void{
    this.departmentForm.reset()
    this.isEditMode = false
  }
}
export interface DialogData {
  firstName: string;
  lastName: string;
 }

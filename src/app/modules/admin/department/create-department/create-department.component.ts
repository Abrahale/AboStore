import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { DepartmentActions } from 'src/app/store/department';
@Component({
  selector: 'abo-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit{  
  isEditMode = false;
  formDepartment: FormGroup;
  
  constructor(private store$:Store<BaseStoreState.State>,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef:MatDialogRef<CreateDepartmentComponent>){
  }

  ngOnInit(): void {
    this.formDepartment = this.fb.group({
      name:['',Validators.required],
      description:['']
    })
    if(this.data != null && this.data.isEdit){
      console.log(this.data)
      this.isEditMode = true
      this.formDepartment.controls['name'].setValue(this.data.preFil.name)
      this.formDepartment.controls['description'].setValue(this.data.preFil.description)
    }
  }

  onSubmit() {
    if(!this.isEditMode){
      this.store$.dispatch(new DepartmentActions.AddNewDepartmentAction(this.formDepartment.value))
    }
    else{
      console.log('Still to be implemented, dispatch action for edit')
    }
    this.dialogRef.close()
    this.clearForm()
  }



  clearForm():void{
    this.formDepartment.reset()
    this.isEditMode = false
  }
}


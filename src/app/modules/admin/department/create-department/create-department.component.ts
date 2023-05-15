import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface MatDialogData {
  firstName: "Kiros" | 'Abrahale' | 'wow';
  lastName: string;
 }
@Component({
  selector: 'abo-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit{  
  isEditMode = false;
  formDepartment: FormGroup;
  
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: MatDialogData){
  }

  ngOnInit(): void {
    this.formDepartment = this.fb.group({
      name:[''],
      description:['']
    })
  }

  onSubmit() {
    if(!this.isEditMode){
      //this.store$.dispatch(new DepartmentActions.AddNewDepartmentAction(this.departmentForm.value))
    }
    else{
      console.log('Still to be implemented, dispatch action for edit')
    }
    this.clearForm()
  }



  clearForm():void{
    this.formDepartment.reset()
    this.isEditMode = false
  }
}


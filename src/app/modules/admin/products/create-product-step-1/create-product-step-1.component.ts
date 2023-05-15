import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MatDialogData{
    title:string,
    description:string
  
}

@Component({
  selector: "abo-create-product-step-1",
  templateUrl:"create-product-step-1.component.html",
  styleUrls: ["create-product-step-1.component.scss"]
})
export class CreateProductStep1Component implements OnInit {
  isEditMode = false;
  subscription$;
  departments$;
  formProduct: FormGroup;



  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: MatDialogData) {
    if(this.data != null){
      this.isEditMode = true
    }
  }

  ngOnInit(): void {
    this.formProduct = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]],
      description: ['', [Validators.required, Validators.minLength(3)]]
    });
    console.log('the form:',this.formProduct)
    if(this.isEditMode){
      this.formProduct.controls['title'].setValue(this.data.title)
      this.formProduct.controls['description'].setValue(this.data.description)
    }
  }

  onSubmit() {
    if(!this.isEditMode){
     // this.store$.dispatch(new DepartmentActions.AddNewDepartmentAction(this.department))
    }
    else{
      console.log('Still to be implemented, dispatch action for edit')
    }
    this.clearForm()
  }


  clearForm():void{
    this.isEditMode = false
    this.formProduct.reset()
  }

}

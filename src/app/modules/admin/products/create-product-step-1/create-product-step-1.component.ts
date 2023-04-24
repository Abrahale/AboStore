import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: "abo-create-product-step-1",
  templateUrl:"create-product-step-1.component.html",
  styleUrls: ["create-product-step-1.component.scss"]
})
export class CreateProductStep1Component implements OnInit {
  isEditMode = false;
  department={name:'',description:''}
  departmentForm:NgForm;
  subscription$;
  departments$;
  form: FormGroup;


  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]],
      
      category: ['BEGINNER', Validators.required],
      courseType: ['premium', Validators.required],
      downloadsAllowed: [false, Validators.requiredTrue],
      longDescription: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title']
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
  
  editDepartment(input:any){
    this.isEditMode = true
    this.department.name = input.name
    this.department.description = input.description
  }

  clearForm():void{
    this.department = {name:null, description:null}
    this.isEditMode = false
  }

}

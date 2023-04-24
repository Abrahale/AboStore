import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: "abo-create-product-step-1",
  templateUrl:"create-product-step-1.component.html",
  styleUrls: ["create-product-step-1.component.scss"]
})
export class CreateProductStep1Component implements OnInit {
  @ViewChild("productForm") productForm: NgForm;
  isEditMode = false;
  product={title:'',description:''}
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
    this.product.title = input.title
    this.product.description = input.description
  }

  clearForm():void{
    //this.product = {title:null, description:null}
    this.isEditMode = false
    this.productForm.reset()
  }

}

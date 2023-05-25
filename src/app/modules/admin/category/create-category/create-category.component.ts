import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectionModel } from 'src/app/modules/models/selectionModel.model';
import { BaseStoreState } from 'src/app/store';
import { CategoryActions } from 'src/app/store/category';
import { DepartmentSelectors } from 'src/app/store/department';
import { atLeastOneCheckboxCheckedValidator } from 'src/app/validators/atLeasetOneCheckboxSelectedValidators';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit{
  isEditMode = false
  formCategory: FormGroup
  departments: selectionModel[];
  constructor(private fb:FormBuilder,private store$:Store<BaseStoreState.State>, public dialogRef: MatDialogRef<CreateCategoryComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit(): void {
    this.formCategory = this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required]
    })
    this.store$.select(DepartmentSelectors.selectData).subscribe(data => {
      if(data != null && typeof data === 'object')
      this.departments = data.map(el => { return{name:el.name, id:el._id}})
    })
    
    if(this.data != null && this.data.isEditMode){
      this.isEditMode = true;
      this.f['name'].setValue(this.data.preFil.name)
      this.f['description'].setValue(this.data.preFil.description)
      this.formCategory.addControl("departments",this.buildCategoryFormArr(this.departments,this.data.preFil.department))
    }
    else{
      this.formCategory.addControl("departments",this.buildCategoryFormArr(this.departments))
    }


  }
  get f() {
    return this.formCategory && this.formCategory.controls;
  }

  get departmentsContorls(): FormArray {
    return this.f && <FormArray>this.f['departments']
  }

  get departmentsSelectedIds(): string[] {
    return this.departments
      .filter((cat, catIdx) => this.departmentsContorls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
      .map(cat => cat.id);
  }

  get formValues(){
    return this.formCategory && this.formCategory.value
  }

  buildCategoryFormArr(dep: selectionModel[], selectedDepIds: string[] = []): FormArray | void {
    if(dep != null){
      const controlArr = dep.map(d => {
        let isSelected = selectedDepIds.some(id => id === d.id);
        return this.fb.control(isSelected);
      })
      return this.fb.array(controlArr, atLeastOneCheckboxCheckedValidator())
    }

  }

  submitCategory(){
    let query = {name:this.formValues.name, description:this.formValues.description, department:[]}
    query.department = this.departmentsSelectedIds
    if(!this.isEditMode){
      this.store$.dispatch( new CategoryActions.AddNewCategoryRequestAction(query))
    }
    else{
      console.log('Still to implement the dispatch action for edit')
    }
    this.clearForm()
    this.dialogRef.close()
  }

  clearForm():void{
    this.formCategory.reset()
  }
}

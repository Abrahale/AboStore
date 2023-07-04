import {Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectionModel } from 'src/app/modules/models/selectionModel.model';
import { BaseStoreState, FileActions, FileSelectors, ManufacturerSelectors, ProductsActions, ProductsSelectors } from 'src/app/store';
import { CategorySelectors } from 'src/app/store/category';
import { DepartmentSelectors } from 'src/app/store/department';
import { atLeastOneCheckboxCheckedValidator } from 'src/app/validators/atLeasetOneCheckboxSelectedValidators';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { product } from 'src/app/modules/product/models/products';
enum formArrayTypes{
  DEPARTMENT = 'DEPARTMENT',
  CATEGORY = 'CATEGORY',
  MANUFACTURER = 'MANUFACTURER',
  FILE = 'FILE'
}

@Component({
  selector: "abo-add-product",
  templateUrl:"add-product.component.html",
  styleUrls: ["add-product.component.scss"]
})

export class AddproductComponent implements OnInit {
  editMode:boolean = false;
  departments: selectionModel[];
  categories: selectionModel[];
  manufacturers: selectionModel[];
  files: selectionModel[];
  addedProduct$: Observable<product>;
  departmentForm; 
  categoryForm;
  manufacturerForm;
  filesForm;
  productToEdit;

  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  
  formProduct;
  isLinear = false;

  ngOnInit(): void {
    this.store$.select(ProductsSelectors.selectIsEditMode).subscribe(_ => this.editMode = _)
    this.store$.select(ProductsSelectors.selectFormProduct).subscribe(data =>{
      this.productToEdit = data
    })
    this.departmentForm = this.fb.group([]);
    this.categoryForm = this.fb.group([]);
    this.manufacturerForm = this.fb.group([]);
    this.filesForm = this.fb.group([]);

    if(this.editMode){
      this.formProduct = this.fb.group({
        title: [this.productToEdit.title, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60)
        ]],
        description: [this.productToEdit.description, [Validators.required, Validators.minLength(3)]],
        productCode:[this.productToEdit.productCode,Validators.required],
        price:[this.productToEdit.price, Validators.required],
        available:[this.productToEdit.available],
        quantity:[this.productToEdit.quantity,Validators.required]
      });
      this.departmentForm.addControl("departments",this.buildFormArray(this.departments,this.productToEdit.department))
      this.manufacturerForm.addControl("manufacturer",this.buildFormArray(this.manufacturers,this.productToEdit.manufacturer))
      this.filesForm.addControl("files",this.buildFormArray(this.files,this.productToEdit.image))
    }
    else{
      this.formProduct = this.fb.group({
        title: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60)
        ]],
        description: ['', [Validators.required, Validators.minLength(3)]],
        productCode:['',Validators.required],
        price:[null, Validators.required],
        available:[true],
        quantity:[1,Validators.required]
      });
      this.departmentForm.addControl("departments",this.buildFormArray(this.departments))
      this.manufacturerForm.addControl("manufacturer",this.buildFormArray(this.manufacturers))
      this.filesForm.addControl("files",this.buildFormArray(this.files))
    }





  }

  constructor(private fb: FormBuilder, private store$:Store<BaseStoreState.State>,private catService:CategoryService) {
    this.store$.select(DepartmentSelectors.selectData).subscribe(data => {
      if(data != null && typeof data === 'object')
      this.departments = data.map(el => { return{name:el.name, id:el._id}})
    })

    this.store$.select(ManufacturerSelectors.selectData).subscribe(data =>{
      if(data != null && typeof data === 'object'){
        this.manufacturers = data.map(el => { return{name:el.name, id:el._id}})
      }
    })

    this.store$.select(FileSelectors.selectFiles).subscribe(data => {
      if(data != null){
        this.files = (data.map(el => { return{name:el, id:el}})) as selectionModel[];
      }
    })

  }
  get departmentform() {
    return this.departmentForm && this.departmentForm.controls;
  }

  get departmentsContorls(): FormArray {
    return this.departmentform && <FormArray>this.departmentform['departments']
  }

  get catform() {
    return this.categoryForm && this.categoryForm.controls;
  }

  get categoryContorls(): FormArray {
    return this.catform && <FormArray>this.catform['categories']
  }

  get manu_form(){
    return this.manufacturerForm && this.manufacturerForm.controls;
  }

  get manuControls(): FormArray{
    return this.manu_form && <FormArray>this.manu_form['manufacturer']
  }

  get file_form(){
    return this.filesForm && this.filesForm.controls;
  }

  get fileControls(): FormArray{
    return this.file_form && <FormArray>this.file_form['files']
  }

  buildFormArray(dep: selectionModel[], selectedDepIds: string[] = []): FormArray {
    if(dep != null){
      const controlArr = dep.map(d => {
        let isSelected = selectedDepIds.some(id => id === d.id);
        return this.fb.control(isSelected);
      })
      return this.fb.array(controlArr, atLeastOneCheckboxCheckedValidator())
    }
    return this.fb.array([],atLeastOneCheckboxCheckedValidator())

  }

  getSelectedIds(input:formArrayTypes): string[] {
    switch(input){
        case formArrayTypes.DEPARTMENT:
          return this.departments
            .filter((cat, catIdx) => this.departmentsContorls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
            .map(cat => cat.id);

        case formArrayTypes.CATEGORY:
          return this.categories
            .filter((cat, catIdx) => this.categoryContorls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
            .map(cat => cat.id);

        case formArrayTypes.MANUFACTURER:
          return this.manufacturers
            .filter((cat, catIdx) => this.manuControls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
            .map(cat => cat.id);

        case formArrayTypes.FILE:
          return this.files
            .filter((cat, catIdx) => this.fileControls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
            .map(cat => cat.id);

          default:
            return []
    }

  }

  step1OnClick():void{
  }
  step2OnClick():void{
    const deps = this.getSelectedIds(formArrayTypes.DEPARTMENT)
    this.categoryForm.removeControl("categories")
    this.catService.getCategoriesByDepartment(deps).subscribe(data =>{
      if(data != null && typeof data === 'object'){
        this.categories = data.result.map(el => { return{name:el.name, id:el._id}})
        if(this.editMode){
          this.categoryForm.addControl("categories",this.buildFormArray(this.categories,this.productToEdit.category))
        }else{
          this.categoryForm.addControl("categories",this.buildFormArray(this.categories))
        }
      }
    })
  }
  step3OnClick():void{
  }
  step4OnClick():void{
  }
  step5OnClick():void{
    
  }
  

 submit = () => {
  const step1 = this.formProduct.value;
  const dep = this.getSelectedIds(formArrayTypes.DEPARTMENT)
  const cat = this.getSelectedIds(formArrayTypes.CATEGORY)
  const manu = this.getSelectedIds(formArrayTypes.MANUFACTURER)
  const img = this.getSelectedIds(formArrayTypes.FILE)

  const query = {
    ...step1,
    department:dep,
    category: cat,
    manufacturer:manu,
    image:img
  }
    if(this.editMode){

      this.store$.dispatch(new ProductsActions.UpadateProductView({...query,id:this.productToEdit._id}))
    }
    else{
      this.store$.dispatch(new ProductsActions.AddNewProductLoadRequest(query))
    }
  }

}

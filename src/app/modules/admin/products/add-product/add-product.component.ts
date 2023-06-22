import {Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectionModel } from 'src/app/modules/models/selectionModel.model';
import { BaseStoreState, ManufacturerSelectors, ProductsActions, ProductsSelectors } from 'src/app/store';
import { CategorySelectors } from 'src/app/store/category';
import { DepartmentSelectors } from 'src/app/store/department';
import { atLeastOneCheckboxCheckedValidator } from 'src/app/validators/atLeasetOneCheckboxSelectedValidators';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { product } from 'src/app/modules/product/models/products';


@Component({
  selector: "abo-add-product",
  templateUrl:"add-product.component.html",
  styleUrls: ["add-product.component.scss"]
})
export class AddproductComponent implements OnInit {
  departments: selectionModel[];
  categories: selectionModel[];
  manufacturers: selectionModel[];
  addedProduct$: Observable<product>;
  departmentForm; 
  categoryForm;
  manufacturerForm;

  productForm = {
  "available": true,
  "category": "627041757d45c817161e3e64",
  "department": "627074903ee1e964799777c2",
  "description": "Just a description",
  "manufacturer": "Ab Kiros",
  "price": "120",
  "productCode": "123123123",
  "sku": "1",
  "title": "AboStore Testing Add Product"}

  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  
  formProduct = this.fb.group({
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
  isLinear = false;

  ngOnInit(): void {
    this.departmentForm = this.fb.group([]);
    this.categoryForm = this.fb.group([]);
    this.manufacturerForm = this.fb.group([]);

    this.departmentForm.addControl("departments",this.buildFormArray(this.departments))
    this.manufacturerForm.addControl("manufacturer",this.buildFormArray(this.manufacturers))

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

  getSelectedIds(input:selectionModel[]): string[] {
    return input
      .filter((cat, catIdx) => this.departmentsContorls?.controls?.some((control, controlIdx) => catIdx === controlIdx && control.value))
      .map(cat => cat.id);
  }

  step1OnClick():void{
  }
  step2OnClick():void{
    const deps = this.getSelectedIds(this.departments)
    this.categoryForm.removeControl("categories")
    this.catService.getCategoriesByDepartment(deps).subscribe(data =>{
      if(data != null && typeof data === 'object'){
        this.categories = data.map(el => { return{name:el.name, id:el._id}})
        this.categoryForm.addControl("categories",this.buildFormArray(this.categories))
      }
    })
  }
  step3OnClick():void{
  }
  step4OnClick():void{
    const step1 = this.formProduct.value;
    const dep = this.getSelectedIds(this.departments)
    const cat = this.getSelectedIds(this.categories)
    const manu = this.getSelectedIds(this.manufacturers)

    const query = {
      ...step1,
      department:dep,
      category: cat,
      manufacturer:manu
    }
    this.store$.dispatch(new ProductsActions.AddNewProductLoadRequest(query))
  }
  step5OnClick():void{
  }
  
  updateproductInDb(event){
    let query = {};
    if(event != null){
       this.store$.select(ProductsSelectors.selectNewlyAddedProduct).subscribe(
        d => query = {id:d._id, image:[...d.image, event]} 
      )
      this.store$.dispatch(new ProductsActions.UpadateProductView(query))
    }
  }
  addExistingImage(event){
    console.log(event)
  }
}

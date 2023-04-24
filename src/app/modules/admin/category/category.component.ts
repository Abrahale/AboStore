import { Component,OnInit, ViewChild } from '@angular/core';
import { CategoryActions, CategorySelectors } from 'src/app/store/category';
import { CategoryService } from '../services/category.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { DepartmentService } from '../services/department.service';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { map } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  @ViewChild("categoryForm") categoryForm:NgForm
  category$;
  category={
    name:null,
    description:null,
    departments:[]
  }
  isEditMode = false;

  constructor(private depService:CategoryService, private store$:Store<BaseStoreState.State>){
    this.store$.dispatch(new DepartmentActions.LoadRequestAction());
    this.store$.dispatch(new CategoryActions.LoadRequestAction());
  }

  ngOnInit():void{
    this.category$ = this.store$.select(CategorySelectors.selectData)
    this.store$.select(DepartmentSelectors.selectData).subscribe(data => {
      if(data != null && typeof data === 'object')
      this.category.departments = data.map(el => { return{name:el.name, id:el._id, checked:false}})
    })
  }
  
  editCategory(input:any){
    this.isEditMode = true;
    this.category.name = input.name
    this.category.description = input.description
    this.category.departments = this.category.departments.map(el =>{
      if(input.department.includes(el.id)){
        return {...el,checked:true}
      }
      else
      return {...el,checked:false}
    })
    
  }
  submitCategory(){
    let query = {name:this.category.name, description:this.category.description, department:[]}
    query.department = this.category.departments.filter(e => e.checked).map(e => {return e.id})
    if(!this.isEditMode){
      this.store$.dispatch( new CategoryActions.AddNewCategoryRequestAction(query))
    }
    else{
      console.log('Still to implement the dispatch action for edit')
    }
    this.clearForm()
  }

  clearForm():void{
    this.categoryForm.reset()
    this.isEditMode = false;
  }
}

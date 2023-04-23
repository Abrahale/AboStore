import { Component,OnInit } from '@angular/core';
import { CategoryActions, CategorySelectors } from 'src/app/store/category';
import { CategoryService } from '../services/category.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { DepartmentService } from '../services/department.service';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { map } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  category$;
  category={
    name:null,
    description:null,
    departments:[]
  }
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  constructor(private depService:CategoryService, private store$:Store<BaseStoreState.State>){
    this.store$.dispatch(new DepartmentActions.LoadRequestAction());
    this.store$.dispatch(new CategoryActions.LoadRequestAction());
  }

  ngOnInit():void{
    this.category$ = this.store$.select(CategorySelectors.selectData)
    this.store$.select(DepartmentSelectors.selectData).subscribe(data => {
      if(data != null && typeof data === 'object')
      this.category.departments = data.map(el => { return{name:el.name, id:el.id, checked:false}})
    })
  }
  
  editCategory(input:any){
    
    console.log(this.category)
  }
  submitCategory(){
   let query = {name:this.category.name, description:this.category.description, department:[]}
   query.department = this.category.departments.filter(e => e.checked).map(e => {return e.id})
   this.store$.dispatch( new CategoryActions.AddNewCategoryRequestAction(query))
    this.clearForm()
  }

  clearForm():void{
    this.category.name = ''
    this.category.description = ''
    this.category.departments = this.category.departments.map(e => { return { ...e, checked: false}})
    console.log(this.category)
  }
}

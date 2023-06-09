import { Component,OnInit, ViewChild } from '@angular/core';
import { CategoryActions, CategorySelectors } from 'src/app/store/category';
import { CategoryService } from '../services/category.service';
import { BaseStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { DepartmentService } from '../services/department.service';
import { DepartmentActions, DepartmentSelectors } from 'src/app/store/department';
import { map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from './create-category/create-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  category$;
  isEditMode = false;

  constructor(private depService:CategoryService, private store$:Store<BaseStoreState.State>, private dialog:MatDialog){
  }

  ngOnInit():void{
    this.category$ = this.store$.select(CategorySelectors.selectData)

  }
  
  createCategory(){
    this.dialog.open(CreateCategoryComponent)
  }

  editCategory(input:any){
    this.isEditMode = true;
    this.dialog.open(CreateCategoryComponent,{data:{isEditMode: true,preFil:input}})   
  }

  removeCategory(id:string):void{
    this.store$.dispatch(new CategoryActions.DeleteCategoryAction(id))
  }

}

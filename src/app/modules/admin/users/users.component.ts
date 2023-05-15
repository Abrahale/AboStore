import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { UsersSelectors } from 'src/app/store/users';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$;
  isEditMode = false;

  constructor( private store$:Store<BaseStoreState.State>, private dialog:MatDialog){
  }

  ngOnInit():void{
    this.users$ = this.store$.select(UsersSelectors.selectData)

  }
  addNewUser(){
    this.dialog.open(CreateCategoryComponent)
  }
  editCategory(input:any){
    this.isEditMode = true;
    this.dialog.open(CreateCategoryComponent,{data:{isEditMode: true,preFil:input}})   
  }
}

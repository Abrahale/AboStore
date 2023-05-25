import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState } from 'src/app/store';
import { UsersActions, UsersSelectors } from 'src/app/store/users';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { CreateUserComponent } from './create-user/create-user.component';

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
    this.dialog.open(CreateUserComponent)
  }

  editCategory(input:any){
    this.isEditMode = true;
    this.dialog.open(CreateUserComponent,{data:{isEditMode: true,preFil:input}})   
  }

  deleteUser(id:string):void{
    console.log(id)
    this.store$.dispatch(new UsersActions.DeleteUser(id))
  }
  
}

import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BaseStoreState, UsersActions } from 'src/app/store';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  isEditMode = false
  formUser:FormGroup
  constructor(private dialogRef:DialogRef<CreateUserComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder, private store$:Store<BaseStoreState.State>){}
  ngOnInit(): void {
    this.formUser = this.fb.group({
      username:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }

  addUser():void{
    let userData = this.formUser.value;
    this.store$.dispatch(new UsersActions.AddNewUserLoadRequest({...userData, password:'P@ssword123'}))
    this.dialogRef.close()
    this.clearForm()
  }

  clearForm():void{
    this.formUser.reset()
  }
}

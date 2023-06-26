import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/services/authenticationService';
import { BaseStoreState, SignInActions } from 'src/app/store';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singUpForm:any;
  constructor(private store$:Store<BaseStoreState.State>, auth:AuthenticationService, private fb:FormBuilder, private router:Router, private dialog:MatDialog, private dialogRef:MatDialogRef<SignUpComponent>) { }

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      first_name: new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  signUp(){
    this.store$.dispatch(new SignInActions.RegisterUserLoadRequest(this.singUpForm.value))
  }
  redirect(){
    this.router.navigate(['/customers','login'])
  }

  signIn(){
    this.dialogRef.close() 
    this.dialog.open(SignInComponent)
  }

}

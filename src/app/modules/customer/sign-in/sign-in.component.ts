import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AboErrorStateMatcher } from 'src/app/modules/customer/helpers/abo-error-state-matcher';
import { BaseStoreState } from 'src/app/store';
import { SignInActions, SignInSelectors } from 'src/app/store/sign-in';
import { SignInRequestModel } from '../models/sign-in-request.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  singInForm : any;
  session:any;
  loading$ = this.store$.select(SignInSelectors.selectIsLoading)
  constructor(private store$:Store<BaseStoreState.State>, private router:Router, private route:ActivatedRoute, private dialog:MatDialog, private dialogRef:MatDialogRef<SignInComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }
  matcher = new AboErrorStateMatcher();
  signIn(){
    let signInModel: SignInRequestModel = {
      email: this.singInForm.get('email').value,
      password: this.singInForm.get('password').value
    };
    this.store$.dispatch(new SignInActions.LoadRequestAction({signInRequestModel:signInModel}));
    this.session = this.store$.select(SignInSelectors.selectSignInData).subscribe(a =>{
      if(a.id){
        this.dialogRef.close('success') 
      }
    })
  }

  register(){
    this.dialogRef.close()
    this.dialog.open(SignUpComponent)
  }
}

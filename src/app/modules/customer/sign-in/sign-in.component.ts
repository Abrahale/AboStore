import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AboErrorStateMatcher } from 'src/app/modules/customer/helpers/abo-error-state-matcher';
import { BaseStoreState } from 'src/app/store';
import { SignInActions, SignInSelectors } from 'src/app/store/sign-in';
import { SignInRequestModel } from '../models/sign-in-request.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  singInForm : any;
  session:any;
  constructor(private store:Store<BaseStoreState.State>, private router:Router, private route:ActivatedRoute, private dialog:MatDialog, private dialogRef:MatDialogRef<SignInComponent> ) { }

  ngOnInit(): void {
    this.session = this.store.select(SignInSelectors.selectSignInData).subscribe(a =>{
      if(a.id){
        this.redirect();
      }
    })
    this.singInForm = new FormGroup({
      email: new FormControl('ab@abostore.com',[Validators.required, Validators.email]),
      password: new FormControl('P@ssword123',[Validators.required]),
    })
  }
  matcher = new AboErrorStateMatcher();
  signIn(){
    let signInModel: SignInRequestModel = {
      email: this.singInForm.get('email').value,
      password: this.singInForm.get('password').value
    };
    this.store.dispatch(new SignInActions.LoadRequestAction({signInRequestModel:signInModel}));
    this.dialogRef.close() 
  }
  redirect(){
    this.router.navigate(['home'])
  }

  register(){
    this.dialogRef.close()
    this.dialog.open(SignUpComponent)
  }
}

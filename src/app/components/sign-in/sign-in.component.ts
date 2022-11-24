import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignInRequestModel } from 'src/app/models/sign-in-request.model';
import { BaseStoreState } from 'src/app/store';
import { SignInActions, SignInSelectors } from 'src/app/store/sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  singInForm:any;
  session:any;
  constructor(private store:Store<BaseStoreState.State>, private formBuilder:UntypedFormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.session = this.store.select(SignInSelectors.selectSignInData).subscribe(a =>{
      if(a.success){
        this.redirect();
      }
    }
    )
    this.singInForm = new UntypedFormGroup({
      email: new UntypedFormControl('',[Validators.required]),
      password: new UntypedFormControl('',[Validators.required]),
    })
  }
  signIn(){
    let signInModel: SignInRequestModel = {
      email: this.singInForm.get('email').value,
      password: this.singInForm.get('password').value
    };
    this.store.dispatch(new SignInActions.LoadRequestAction({signInRequestModel:signInModel}));
  }
  redirect(){
    this.router.navigate(['home'])
  }

}

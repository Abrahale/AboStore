import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignInRequestModel } from 'src/app/models/sign-in-request.model';
import { BaseStoreState } from 'src/app/store';
import { SignInActions } from 'src/app/store/sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  singInForm:any;
  constructor(private store:Store<BaseStoreState.State>, private formBuilder:FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  signIn(){
    let signInModel: SignInRequestModel = {
      email: this.singInForm.get('email').value,
      password: this.singInForm.get('password').value
    };
    this.store.dispatch(new SignInActions.LoadRequestAction({signInRequestModel:signInModel}));
    // this.auth.signIn(this.singInForm.get('email').value, this.singInForm.get('password').value).subscribe((res:any) =>{
    //   console.log(res)
    //   this.redirect();
    // },
    // (err)=>{
    //   console.error(err)
    // })
  }
  redirect(){
    this.router.navigate(['home'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  singInForm:any;
  constructor(private auth:authenticationService, private formBuilder:FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  signIn(){
    this.auth.signIn(this.singInForm.get('email').value, this.singInForm.get('password').value).subscribe((res:any) =>{
      console.log(res)
      this.redirect();
    },
    (err)=>{
      console.error(err)
    })
  }
  redirect(){
    this.router.navigate(['home'])
  }

}

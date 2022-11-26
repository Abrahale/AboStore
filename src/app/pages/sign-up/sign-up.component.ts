import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singUpForm:any;
  constructor(private auth:AuthenticationService, private formBuilder:UntypedFormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.singUpForm = new UntypedFormGroup({
      name: new UntypedFormControl('',[Validators.required]),
      email: new UntypedFormControl('',[Validators.required]),
      password: new UntypedFormControl('',[Validators.required]),
    })
  }
  signUp(){
    this.auth.signUp(this.singUpForm.get('name').value,this.singUpForm.get('email').value, this.singUpForm.get('password').value).subscribe((res:any) =>{
      console.log(res)
      this.redirect();
    },
    (err)=>{
      console.error(err)
    })
  }
  redirect(){
    this.router.navigate(['sign-in'])
  }

}

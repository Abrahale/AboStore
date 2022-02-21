import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authenticationService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  singUpForm:any;
  constructor(private auth:AuthenticationService, private formBuilder:FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
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

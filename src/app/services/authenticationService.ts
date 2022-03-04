import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SignInRequestModel } from '../models/sign-in-request.model';

@Injectable({
  providedIn:'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  signIn(singInModel: SignInRequestModel){
    return this.http.post<any>("http://localhost:3000/login",singInModel);
  }
  signUp(username:string,email:string, password:string){
    return this.http.post<any>("http://localhost:3000/users",{username,first_name:"will implement",last_name:"will implement", email, password});
  }
}

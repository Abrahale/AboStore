import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SignInRequestModel } from '../modules/customer/models/sign-in-request.model';

@Injectable({
  providedIn:'root'
})
export class AuthenticationService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  signIn(singInModel: SignInRequestModel){
    return this.http.post<any>(`${this.baseUrl}auth/login`,singInModel);
  }
  signUp(username:string,email:string, password:string){
    return this.http.post<any>(`${this.baseUrl}users`,{username,first_name:"will implement",last_name:"will implement", email, password});
  }

  register(input:any){
    return this.http.post<any>(`${this.baseUrl}users`,{username:input.username,first_name:input.first_name,last_name:input.last_name, email:input.email, password:input.password})
  }
}

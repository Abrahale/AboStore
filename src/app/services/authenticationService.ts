import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SignInRequestModel } from '../models/sign-in-request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})
export class AuthenticationService {
  baseUrl = environment.BASE_BE_URL;
  constructor(private http: HttpClient) { }

  signIn(singInModel: SignInRequestModel){
    return this.http.post<any>(`${this.baseUrl}login`,singInModel);
  }
  signUp(username:string,email:string, password:string){
    return this.http.post<any>(`${this.baseUrl}users`,{username,first_name:"will implement",last_name:"will implement", email, password});
  }
}

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

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  signIn(singInModel: SignInRequestModel){
    return this.http.post<any>("http://localhost:3000/login",singInModel).pipe(catchError(this.handleError));
  }
  signUp(name:string,email:string, password:string){
    return this.http.post<any>("http://localhost:3000/users",{name, email, password}).pipe(catchError(this.handleError));
  }
}

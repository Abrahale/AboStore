import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/services/authenticationService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { SignInRequestModel } from "src/app/modules/customer/models/sign-in-request.model";
import { baseEffects } from "../baseEffects";
import { MessageService } from "src/app/modules/shared/services/message.service";

@Injectable()
export class SignInEffects extends baseEffects {
  constructor(private authService: AuthenticationService, private actoins$: Actions, private ms:MessageService ){
    super(ms)
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.authService.signIn(action.payload.signInRequestModel).pipe(
      map(data => {
        this.showMessage(data.message)
        localStorage.setItem('authToken', data.result.token);
        return new featureActions.LoadSuccessAction(data.result)
      }),
        catchError(error => 
          {
            this.showErrorMessage(error, "Failed to Sign you in")
           return observableOf(new featureActions.LoadFailureAction({error}))
          }),
    ),
    ),
  ))

  loadRegister$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.RegisterUserLoadRequest>(
      featureActions.ActionTypes.REGISTER_LOAD_REQUEST,
    ),
    switchMap(action => this.authService.register(action.payload).pipe(
      map((data) =>{ 
          const query:SignInRequestModel = {
            email:action.payload.email,
            password:action.payload.password
          }
          let cak = new featureActions.LoadSuccessAction(data)
          return new featureActions.LoadRequestAction({signInRequestModel:query})}
      ),
      catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
    ))
  ))

}

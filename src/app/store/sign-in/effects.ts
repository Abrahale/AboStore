import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/services/authenticationService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";

@Injectable()
export class SignInEffects {
  constructor(private authService: AuthenticationService, private actoins$: Actions ){
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.authService.signIn(action.payload.signInRequestModel).pipe(
      map(data => new featureActions.LoadSuccessAction(data),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

}

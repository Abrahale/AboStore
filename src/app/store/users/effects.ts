import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { UserService } from "src/app/modules/admin/services/user.service";


@Injectable()
export class UsersEffects {
  constructor(private usersService: UserService, private actoins$: Actions ){
  }s

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.usersService.getUsers().pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

  addNewUser$ = createEffect(()=>this.actoins$.pipe(
    ofType<featureActions.AddNewUserLoadRequest>(
      featureActions.ActionTypes.ADD_NEW_USER_LOAD_REQUEST
    ),
    switchMap(action => this.usersService.AddNewUser(action.payload).pipe(
      map(data => new featureActions.LoadSuccessAction(data),
      ),
      catchError(error => observableOf(new featureActions.LoadFailureAction(error)),
      ),
    ),)
  ),)


  deleteUser$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.DeleteUser>(
      featureActions.ActionTypes.DELET_USER
    ),
    switchMap(action => this.usersService.deletUser(action.payload).pipe(
      map(data => new featureActions.LoadSuccessAction(data),
      ),
      catchError(error => observableOf(new featureActions.LoadFailureAction(error))
      )
    ))
  ),)

}

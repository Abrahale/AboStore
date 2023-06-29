import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf , catchError, map, switchMap} from 'rxjs';
import * as featureActions from './actions';
import { UserService } from "src/app/modules/admin/services/user.service";
import { MessageService } from "src/app/modules/shared/services/message.service";
import { baseEffects } from "../baseEffects";


@Injectable()
export class UsersEffects extends baseEffects{
  constructor(private usersService: UserService, private actoins$: Actions, private ms:MessageService ){
    super(ms)
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.usersService.getUsers().pipe(
      map(data =>{
        return new featureActions.LoadSuccessAction(data)
      } 
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
      map(data => {
        this.showMessage(data.message)
        return new featureActions.LoadSuccessAction(data)}
      ),
      catchError(error => {
        this.showErrorMessage(error,"Failed to add new user")
        return observableOf(new featureActions.LoadFailureAction(error))},
      ),
    ),)
  ),)


  deleteUser$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.DeleteUser>(
      featureActions.ActionTypes.DELET_USER
    ),
    switchMap(action => this.usersService.deletUser(action.payload).pipe(
      map(data => { 
        this.showMessage(data.message)
        return new featureActions.LoadSuccessAction(data)},
      ),
      catchError(error => {
        this.showErrorMessage(error,'Failed to delete user')
        return observableOf(new featureActions.LoadFailureAction(error));}
      )
    ))
  ),)



}

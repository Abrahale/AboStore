import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { DepartmentService } from "src/app/modules/admin/services/department.service";
import { MessageService } from "src/app/modules/shared/services/message.service";
import { baseEffects } from "../baseEffects";

@Injectable()
export class DepartmentEffects extends baseEffects {
  constructor(private departmentService: DepartmentService, private actoins$: Actions, private ms:MessageService ){
    super(ms)
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.departmentService.getAllDepartments().pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

  AddNewDepartment$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.AddNewDepartmentAction>(
      featureActions.ActionTypes.ADD_NEW_DEPARTMENT,
    ),
    switchMap(action => this.departmentService.AddNewDepartment(action.payload).pipe(
      map(data => new featureActions.AddNewDepartmentSuccess(),
      ),
      catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
      ),
    ),
    ),
  ))

  DeleteDepartment$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.DeletePartmentAction>(
      featureActions.ActionTypes.DELETE_DEPARTMENT,
    ),
    switchMap(action => this.departmentService.deleteDepartment(action.payload).pipe(
      map(data => {
        this.showMessage(data.message)
        return new featureActions.LoadSuccessAction({data:data['departments']})
      }
      ),
      catchError(error => {
        this.showErrorMessage(error,'Failed to delete user')
        return observableOf(new featureActions.LoadFailureAction(error));}
      )
    ))
  ))

}

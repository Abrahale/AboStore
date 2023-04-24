import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { DepartmentService } from "src/app/modules/admin/services/department.service";

@Injectable()
export class DepartmentEffects {
  constructor(private departmentService: DepartmentService, private actoins$: Actions ){
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

}

import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/services/authenticationService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { UsersService } from "src/services/users.service";
import { DepartmentService } from "src/services/department.service";

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

}

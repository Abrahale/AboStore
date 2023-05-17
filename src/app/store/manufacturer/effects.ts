import { Injectable} from '@angular/core'
import { createEffect,Actions, ofType } from '@ngrx/effects'
import { ManfaturerService } from 'src/app/modules/admin/services/manufaturer.service'
import * as featureActions from './actions'
import { catchError, map, switchMap } from 'rxjs'
import { of as observableOf } from 'rxjs';
@Injectable()

export class ManufacturerEffects{
    constructor(private manfacture:ManfaturerService, private actoins$: Actions){}

    loadData$ = createEffect(() => this.actoins$.pipe(
        ofType<featureActions.LoadRequestAction>(
            featureActions.ActionTypes.LOAD_REQUEST,
        ),
        switchMap(() => this.manfacture.getManufacturers().pipe(
            map(data => new featureActions.LoadSuccessAction(data),
            ),
            catchError(error => observableOf(new featureActions.LoadFailAction(error)),
            ),
        ),
        ),    
    ))
}


/*
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

*/
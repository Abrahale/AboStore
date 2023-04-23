import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { CategoryService } from "src/app/modules/admin/services/category.service";

@Injectable()
export class CategoryEffects {
  constructor(private categoryService: CategoryService, private actoins$: Actions ){
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.categoryService.getAllCategories().pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

  AddNewCategory$ = createEffect(()=>this.actoins$.pipe(
    ofType<featureActions.AddNewCategoryRequestAction>(
      featureActions.ActionTypes.ADD_NEW_CATEGORY_REQUEST
    ),
    switchMap(action => this.categoryService.AddNewCategory(action.payload).pipe(
      map(data => new featureActions.AddNewCategorySuccessAction()),
      catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
    ))
  ))

}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { CategoryService } from "src/app/modules/admin/services/category.service";
import { baseEffects } from "../baseEffects";
import { MessageService } from "src/app/modules/shared/services/message.service";

@Injectable()
export class CategoryEffects extends baseEffects {
  constructor(private categoryService: CategoryService, private actoins$: Actions, public ms:MessageService ){
    super(ms)
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
    switchMap(action => this.categoryService.addNewCategory(action.payload).pipe(
      map(data => new featureActions.AddNewCategorySuccessAction()),
      catchError(error => observableOf(new featureActions.LoadFailureAction({error})))
    ))
  ))

  DeleteCategory$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.DeleteCategoryAction>(
      featureActions.ActionTypes.DELETE_CATEGORY,
    ),
    switchMap(action => this.categoryService.deleteCategory(action.payload).pipe(
      map(data => {
        this.showMessage(data.message)
        return new featureActions.LoadSuccessAction({data:data['categories']})
      }
      ),
      catchError(error => {
        this.showErrorMessage(error,'Failed to delete user')
        return observableOf(new featureActions.LoadFailureAction(error));}
      )
    ))
  ))

}

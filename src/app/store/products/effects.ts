import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/services/authenticationService";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { AdminProductService } from "src/app/modules/admin/services/product.service";
import { baseEffects } from "../baseEffects";
import { MessageService } from "src/app/modules/shared/services/message.service";

@Injectable()
export class ProductsEffects extends baseEffects {
  constructor(private productService: AdminProductService, private actoins$: Actions , private ms:MessageService){
    super(ms)
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.productService.getAllProducts().pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

  addNewProduct$ = createEffect(()=>this.actoins$.pipe(
    ofType<featureActions.AddNewProductLoadRequest>(
      featureActions.ActionTypes.ADD_NEW_PRODUCT
    ),
    switchMap(action => this.productService.addNewProduct(action.payload).pipe(
      map(data => {
        this.showMessage(data.message)
        return new featureActions.LoadAddNewProductSuccess(data.product)
      }
      ),
      catchError(error => {
        this.showErrorMessage(error,"Failed to add new product")
        return observableOf(new featureActions.LoadFailureAction({error}))
    })
    ),)
  ),)

  updateProductDetails = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.UpadateProductView>(
      featureActions.ActionTypes.UPDATE_PRODUCT_VIEW
    ),
    switchMap(action => this.productService.updateProduct(action.payload).pipe(
      map(data => {return new featureActions.LoadSuccessNoSideEffectAction}),
      catchError(error => {
        return observableOf(new featureActions.LoadFailureAction({error}))
      })
    ))
  ))

  removeProduct$ = createEffect(() => this.actoins$.pipe(
    ofType<featureActions.RemoveProductActionRequest>(
      featureActions.ActionTypes.REMOVE_PRODUCT_ACTION
    ),
    switchMap(action => this.productService.removeProduct(action.payload).pipe(
      map(data => {
        this.showMessage(data.message)
        return new featureActions.LoadSuccessAction({data:data['products']})
      }
      ),
      catchError(error => {
        this.showErrorMessage(error,'Failed to delete user')
        return observableOf(new featureActions.LoadFailureAction(error));}
      )
    ))
  ))

}

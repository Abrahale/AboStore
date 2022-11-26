import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of as observableOf, withLatestFrom } from 'rxjs';
import * as featureActions from './actions';
import { catchError, map, switchMap } from "rxjs";
import { CartService } from "src/app/services/cart";
import { Store } from "@ngrx/store";
import { BaseStoreState, SignInSelectors } from 'src/app/store';

@Injectable()
export class CartsEffects {
  constructor(private _store:Store<BaseStoreState.State>,private cartService: CartService, private actoins$: Actions ){
  }

  loadData$ = createEffect(() =>this.actoins$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST,
    ),
    switchMap(action => this.cartService.checkOut().pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
        ),
        catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
        ),
    ),
    ),
  ))

  addCartItem$ = createEffect(()=>this.actoins$.pipe(
    ofType<featureActions.LoadAddToCartAction>(
      featureActions.ActionTypes.ADD_TO_CART,
    ),
    withLatestFrom(this._store.select(SignInSelectors.selectCartId),this._store.select(SignInSelectors.selectUserId)),
    switchMap(([action,cartId,userId]) => this.cartService.addToCart(cartId,userId,action.payload.cartItem).pipe(
      map(data => new featureActions.LoadSuccessAction({data}),
      ),
      catchError(error => observableOf(new featureActions.LoadFailureAction({error})),
      ),
    ),
    )
  ))

}

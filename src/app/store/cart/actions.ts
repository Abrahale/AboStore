import { Action } from "@ngrx/store";
import { CartModel } from "src/app/models/cartModel";
import { BaseResponseModel } from "src/app/models/response-base.model";
export enum ActionTypes{
  LOAD_REQUEST = '[CARTS] Load Requeust',
  LOAD_FAILURE = '[CARTS] Load Failure',
  LOAD_SUCCESS = '[CARTS] Load Success',
  ADD_TO_CART = '[CART] Add to cart request',
}

export class LoadRequestAction implements Action{
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(){}
}

export class LoadFailureAction implements Action{
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload:{error: string}){}
}

export class LoadSuccessAction implements Action{
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload:{data: BaseResponseModel<any>}){}
}

export class LoadAddToCartAction implements Action{
  readonly type = ActionTypes.ADD_TO_CART;
  constructor(public payload:{cartModel: CartModel}){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| LoadAddToCartAction;

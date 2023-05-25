import { Action } from "@ngrx/store";
import { product } from "src/app/modules/product/models/products";
export enum ActionTypes{
  LOAD_REQUEST = '[PRODUCTS] Load Requeust',
  LOAD_FAILURE = '[PRODUCTS] Load Failure',
  LOAD_SUCCESS = '[PRODUCTS] Load Success',
  LOAD_SUCCESS_NO_SIDE_EFFECT = '[PRODUCTS] Load Success No Side Effect',
  UPDATE_PRODUCT_VIEW = '[PRODUCTS] Load Product View',
  ADD_NEW_PRODUCT = '[PRODUCTS] Load Add New Product',
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
  constructor(public payload:{data: any}){}
}

export class LoadSuccessNoSideEffectAction implements Action{
  readonly type = ActionTypes.LOAD_SUCCESS_NO_SIDE_EFFECT;
  constructor(){}
}

export class UpadateProductView implements Action{
  readonly type = ActionTypes.UPDATE_PRODUCT_VIEW;
  constructor(public payload:product){}
}

export class AddNewProductLoadRequest implements Action{
  readonly type = ActionTypes.ADD_NEW_PRODUCT;
  constructor(public payload:any){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction 
| UpadateProductView
| AddNewProductLoadRequest
| LoadSuccessNoSideEffectAction

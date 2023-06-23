import { Action } from "@ngrx/store";
import { IProductForm } from "src/app/modules/models/_product_form";
import { product } from "src/app/modules/product/models/products";
export enum ActionTypes{
  LOAD_REQUEST = '[PRODUCTS] Load Requeust',
  LOAD_FAILURE = '[PRODUCTS] Load Failure',
  LOAD_SUCCESS = '[PRODUCTS] Load Success',
  LOAD_SUCCESS_NO_SIDE_EFFECT = '[PRODUCTS] Load Success No Side Effect',
  UPDATE_PRODUCT_VIEW = '[PRODUCTS] Load Product View',
  ADD_NEW_PRODUCT = '[PRODUCTS] Load Add New Product',
  ADD_NEW_PRODUCT_SUCCESS = '[PRODUCTS] Load Add New Product Success',
  REMOVE_PRODUCT_ACTION = '[PRODUCTS] Remove Product Action',
  UPDATE_FORM_ACTION = '[PRODUCTS] Update Product Form Action',
  RESET_PRODUCT_FORM = '[PRODUCTS] Reset Product Form Action',
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

export class LoadAddNewProductSuccess implements Action{
  readonly type = ActionTypes.ADD_NEW_PRODUCT_SUCCESS;
  constructor(public payload:any){}
}

export class UpadateProductView implements Action{
  readonly type = ActionTypes.UPDATE_PRODUCT_VIEW;
  constructor(public payload:product | any){}
}

export class AddNewProductLoadRequest implements Action{
  readonly type = ActionTypes.ADD_NEW_PRODUCT;
  constructor(public payload:any){}
}

export class RemoveProductActionRequest implements Action{
  readonly type = ActionTypes.REMOVE_PRODUCT_ACTION
  constructor(public payload:string){}
}

export class UpdateProductFormRequest implements Action{
  readonly type = ActionTypes.UPDATE_FORM_ACTION
  constructor(public payload:{ data: Partial<IProductForm>, editMode :boolean }){}
}

export class ResetProductFormRequest implements Action{
    readonly type=ActionTypes.RESET_PRODUCT_FORM
    constructor(){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction 
| UpadateProductView
| AddNewProductLoadRequest
| LoadSuccessNoSideEffectAction
| LoadAddNewProductSuccess
| RemoveProductActionRequest
| UpdateProductFormRequest
| ResetProductFormRequest
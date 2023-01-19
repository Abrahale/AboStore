import { Action } from "@ngrx/store";
import { CartItem, CartModel } from "src/app/models/cartModel";
import { BaseResponseModel } from "src/app/models/response-base.model";
export enum ActionTypes{
  LOAD_REQUEST = '[CARTS] Load Requeust',
  LOAD_FAILURE = '[CARTS] Load Failure',
  LOAD_SUCCESS = '[CARTS] Load Success',
  ADD_TO_CART = '[CART] Add to cart request',
  DELETE_ITEM = '[CART] Delete Item',
  DELETE_All_ITEM = '[CART] Delete All Item',
  UPDATE_ITEM_QTY = '[CART] Update Item Quantity'
}

export class LoadRequestAction implements Action{
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload:{id:string}){}
}

export class LoadFailureAction implements Action{
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload:{error: string}){}
}

export class LoadSuccessAction implements Action{
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload:CartModel){}
}
//add to cart
export class LoadAddToCartAction implements Action{
  readonly type = ActionTypes.ADD_TO_CART;
  constructor(public payload:{cartItem: CartItem}){}
}
// Delete Single
export class DeleteItemAction implements Action {
  readonly type = ActionTypes.DELETE_ITEM;
  constructor(public payload: {cartId:string,product_id:string,cartItem_id:string,remove:boolean}) { }
}
// Delete All
export class DeleteAllItemAction implements Action {
  readonly type = ActionTypes.DELETE_All_ITEM;
  constructor() { }
}
// Update
export class UpdateQuantity implements Action {
  readonly type = ActionTypes.UPDATE_ITEM_QTY;
  constructor(public payload: {cartId:string,product_id:string,cartItem_id:string,inc:boolean}) { }
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| LoadAddToCartAction
| DeleteItemAction 
| DeleteAllItemAction 
| UpdateQuantity;

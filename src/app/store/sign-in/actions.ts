import { Action } from "@ngrx/store";
import { SignInRequestModel } from "src/app/modules/customer/models/sign-in-request.model";

import { signInResponse } from "./state";
export enum ActionTypes{
  LOAD_REQUEST = '[SIGN-IN] Load Requeust',
  LOAD_FAILURE = '[SIGN-IN] Load Failure',
  LOAD_SUCCESS = '[SIGN-IN] Load Success',
  SELECT_CART_ID = '[SIGN_IN] Load Cart ID',
  REGISTER_LOAD_REQUEST = '[REGISTER] Load Register Request',
  REGISTER_LOAD_SUCCESS = '[REGISTER] Load Register Success'
}

export class LoadRequestAction implements Action{
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload:{signInRequestModel: SignInRequestModel}){}
}

export class LoadFailureAction implements Action{
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload:{error: string}){}
}

export class LoadSuccessAction implements Action{
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload:signInResponse){}
}

export class LoadSelectCartId implements Action{
  readonly type = ActionTypes.SELECT_CART_ID;
  constructor(){}
}

export class RegisterUserLoadRequest implements Action{
  readonly type = ActionTypes.REGISTER_LOAD_REQUEST
  constructor(public payload:any){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| LoadSelectCartId
| RegisterUserLoadRequest

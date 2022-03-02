import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { SignInRequestModel } from "src/app/models/sign-in-request.model";
export enum ActionTypes{
  LOAD_REQUEST = '[PRODUCTS] Load Requeust',
  LOAD_FAILURE = '[PRODUCTS] Load Failure',
  LOAD_SUCCESS = '[PRODUCTS] Load Success',
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
  constructor(public payload:{data: BaseResponseModel<any>}){}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;

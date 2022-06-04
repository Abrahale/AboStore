import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
export enum ActionTypes{
  LOAD_REQUEST = '[CARTS] Load Requeust',
  LOAD_FAILURE = '[CARTS] Load Failure',
  LOAD_SUCCESS = '[CARTS] Load Success',
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

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;

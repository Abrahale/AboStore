import { Action } from "@ngrx/store";
import { BaseResponse } from "src/app/models/baseResponse.model";
import { categoryForm } from "src/app/models/categoryForm.model copy";
export enum ActionTypes{
  LOAD_REQUEST = '[CATEGORY] Load Requeust',
  LOAD_FAILURE = '[CATEGORY] Load Failure',
  LOAD_SUCCESS = '[CATEGORY] Load Success',
  UPDATE_FORMINPUT = '[CATEGORY] update form input',
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
  constructor(public payload:{data: BaseResponse<any>}){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:categoryForm){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput;

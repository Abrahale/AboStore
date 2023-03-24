import { Action } from "@ngrx/store";
import { BaseResponse } from "src/app/models/baseResponse.model";
import { departmentForm } from "src/app/models/departmentForm.model";
export enum ActionTypes{
  LOAD_REQUEST = '[DEPARTMENT] Load Requeust',
  LOAD_FAILURE = '[DEPARTMENT] Load Failure',
  LOAD_SUCCESS = '[DEPARTMENT] Load Success',
  UPDATE_FORMINPUT = '[DEPARTMENT] update form input',
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
  constructor(public payload:departmentForm){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput;

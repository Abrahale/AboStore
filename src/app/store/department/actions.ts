import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { Department } from "src/app/modules/models/department.model";
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
  constructor(public payload:{data: BaseResponseModel<any>}){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:Department){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput;

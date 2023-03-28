import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { Category } from "src/app/modules/models/category.model";
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
  constructor(public payload:{data: BaseResponseModel<any>}){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:Category){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput;

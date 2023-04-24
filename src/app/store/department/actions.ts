import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { Department } from "src/app/modules/models/department.model";
export enum ActionTypes{
  LOAD_REQUEST = '[DEPARTMENT] Load Requeust',
  LOAD_FAILURE = '[DEPARTMENT] Load Failure',
  LOAD_SUCCESS = '[DEPARTMENT] Load Success',
  ADD_NEW_DEPARTMENT = '[DEPARTMENT] Add New Department Load Request',
  ADD_NEW_DEPARTMENT_SUCCESS = '[DEPARTMENT] Add New Department Load Success',
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

export class AddNewDepartmentAction implements Action{
  readonly type = ActionTypes.ADD_NEW_DEPARTMENT
  constructor(public payload:{name:string,description:string}){}
}

export class AddNewDepartmentSuccess implements Action{
  readonly type = ActionTypes.ADD_NEW_DEPARTMENT_SUCCESS
  constructor(){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:Department){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput
| AddNewDepartmentAction
| AddNewDepartmentSuccess

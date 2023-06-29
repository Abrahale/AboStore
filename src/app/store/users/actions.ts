import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
export enum ActionTypes{
  LOAD_REQUEST = '[USERS] Load Requeust',
  LOAD_FAILURE = '[USERS] Load Failure',
  LOAD_SUCCESS = '[USERS] Load Success',
  UPDATE_FORMINPUT = '[USERS] update form input',
  ADD_NEW_USER_LOAD_REQUEST = '[USERS] Add new user load request',
  DELET_USER = "[USER] Delete a user"
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
  constructor(public payload:BaseResponseModel<any>){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:any){}
}

export class AddNewUserLoadRequest implements Action{
  readonly type=ActionTypes.ADD_NEW_USER_LOAD_REQUEST
  constructor(public payload:any){}
}

export class DeleteUser implements Action{
  readonly type=ActionTypes.DELET_USER
  constructor(public payload:any){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput
| AddNewUserLoadRequest
| DeleteUser

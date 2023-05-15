import { Action } from "@ngrx/store";
export enum ActionTypes{
  LOAD_REQUEST = '[USERS] Load Requeust',
  LOAD_FAILURE = '[USERS] Load Failure',
  LOAD_SUCCESS = '[USERS] Load Success',
  UPDATE_FORMINPUT = '[USERS] update form input',
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
  constructor(public payload:any){}
}

export class UpdateFormInput implements Action{
  readonly type = ActionTypes.UPDATE_FORMINPUT;
  constructor(public payload:any){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput;

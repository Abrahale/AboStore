import { Action } from "@ngrx/store";
import { BaseResponseModel } from "src/app/models/response-base.model";
import { Category } from "src/app/modules/models/category.model";
export enum ActionTypes{
  LOAD_REQUEST = '[CATEGORY] Load Requeust',
  LOAD_FAILURE = '[CATEGORY] Load Failure',
  LOAD_SUCCESS = '[CATEGORY] Load Success',
  UPDATE_FORMINPUT = '[CATEGORY] update form input',
  ADD_NEW_CATEGORY_REQUEST = '[CATEGORY] Add New Category Load Request',
  ADD_NEW_CATEGORY_SUCCESS = '[CATEGORY] Add New Category Load Request',
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

export class AddNewCategoryRequestAction implements Action{
  readonly type = ActionTypes.ADD_NEW_CATEGORY_REQUEST
  constructor(public payload:{name:string,description:string,department:string[]}){}
}
export class AddNewCategorySuccessAction implements Action{
  readonly type = ActionTypes.ADD_NEW_CATEGORY_SUCCESS
  constructor(){}
}

export type Actions = 
LoadRequestAction 
| LoadFailureAction 
| LoadSuccessAction
| UpdateFormInput
| AddNewCategoryRequestAction
| AddNewCategorySuccessAction

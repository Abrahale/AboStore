import { Action } from "@ngrx/store"
import { BaseResponseModel } from "src/app/models/response-base.model"

export enum ActionTypes{
    LOAD_REQUEST = '[FILES] Load Request',
    LOAD_FAILURE = '[FILES] Load Failure',
    LOAD_SUCCESS = '[FILES] Load Success'
}

export class LoadRequestAction implements Action{
    readonly type = ActionTypes.LOAD_REQUEST
    constructor(){}
}

export class LoadFailureAction implements Action{
    readonly type= ActionTypes.LOAD_FAILURE
    constructor(public payload:{error:string}){}
}

export class LoadSuccessAction implements Action{
    readonly type= ActionTypes.LOAD_SUCCESS
    constructor(public payload:BaseResponseModel<any>){}
}

export type Actions = 
LoadRequestAction
| LoadFailureAction
| LoadSuccessAction
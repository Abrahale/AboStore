import { Action } from "@ngrx/store"

export enum ActionTypes{
    LOAD_REQUEST = "[MANUFACTURER] Load Request",
    SUCCESS_REQUEST = "[MANUFACTURER] Success Request",
    FAIL_REQUEST = "[MANUFACTURER] Fail Request",
}

export class LoadRequestAction implements Action{
    readonly type = ActionTypes.LOAD_REQUEST
    constructor(){}
}

export class LoadSuccessAction implements Action{
    readonly type = ActionTypes.SUCCESS_REQUEST
    constructor(public payload:any){}
}

export class LoadFailAction implements Action{
    readonly type = ActionTypes.FAIL_REQUEST
    constructor(public payload:any){}
}

export type Actions = 
LoadRequestAction
| LoadSuccessAction
| LoadFailAction
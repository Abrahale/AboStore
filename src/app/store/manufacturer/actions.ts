import { Action } from "@ngrx/store"

export enum ActionTypes{
    LOAD_REQUEST = "[MANUFACTURER] Load Request",
    SUCCESS_REQUEST = "[MANUFACTURER] Success Request",
    FAIL_REQUEST = "[MANUFACTURER] Fail Request",
    ADD_NEW_MANUFACTURER_REQUEST = "[MANUFACTURER] Add New Manufacturer Load Request",
    ADD_NEW_MANUFACTURER_SUCCESS_REQUEST = "[MANUFACTURER] Add New Manufacturer Success Request",
    DELETE_MANUFACTURER = "[MANUFACTURER] Remove Manufacturer Request",
}

export class LoadRequestAction implements Action{
    readonly type = ActionTypes.LOAD_REQUEST
    constructor(){}
}

export class LoadSuccessAction implements Action{
    readonly type = ActionTypes.SUCCESS_REQUEST
    constructor(public payload:{data:any}){}
}

export class LoadFailureAction implements Action{
    readonly type = ActionTypes.FAIL_REQUEST
    constructor(public payload:{error:any}){}
}

export class AddNewManufacturerLoadRequest implements Action{
    readonly type = ActionTypes.ADD_NEW_MANUFACTURER_REQUEST
    constructor(public payload:any){}
}

export class AddNewManufacturerSuccessRequest implements Action{
    readonly type = ActionTypes.ADD_NEW_MANUFACTURER_SUCCESS_REQUEST
    constructor(public payload:any){}
}

export class DeleteManufacturerAction implements Action{
    readonly type=ActionTypes.DELETE_MANUFACTURER
    constructor(public payload:string){}
}

export type Actions = 
LoadRequestAction
| LoadSuccessAction
| LoadFailureAction
| AddNewManufacturerLoadRequest
| AddNewManufacturerSuccessRequest
| DeleteManufacturerAction
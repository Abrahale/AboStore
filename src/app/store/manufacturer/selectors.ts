import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store"
import { State } from "./state"
import { storeConstants } from "src/app/constants/store-constants"

export const getData = (state:State):any => state.data
export const getIsLoading = (state:State) : boolean => state.isLoading
export const getError = (state: State) : any => state.error


export const getState: MemoizedSelector<object,State> = createFeatureSelector<State>(storeConstants.MANUFACTURER)

export const selectData:MemoizedSelector<object,any> =
    createSelector(getState,getData)

export const selectIsLoading: MemoizedSelector<object,boolean> = 
    createSelector(getState,getIsLoading)

export const selectError: MemoizedSelector<object,any> = 
    createSelector(getState,getError)
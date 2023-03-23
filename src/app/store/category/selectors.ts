import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';
import { BaseResponse } from 'src/app/models/baseResponse.model';
export const getData = (state: State): BaseResponse<any> | null => state.data;
export const getError = (state: State): string | null => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;

export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.CATEGORY);

// export const selectData: (state:State) => BaseResponse<any> =
// createSelector(getState, getData);

export const selectData: MemoizedSelector<object,any> = 
createSelector(getState,getData);

export const selectCategoryError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { BaseResponseModel } from 'src/app/models/response-base.model';
import { State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';

export const getData = (state: State): BaseResponseModel<any> | null => state.data;
export const getError = (state: State): string | null => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;

export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.PRODUCTS);

export const selectData: (state:State) => BaseResponseModel<any> | null =
createSelector(getState, getData);


export const selectSignInError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

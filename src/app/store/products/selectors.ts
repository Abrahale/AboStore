import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { BaseResponseModel } from 'src/app/models/response-base.model';
import { State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';

export const getData = (state: State): any[] => state.data['result'];
export const getError = (state: State): string => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;

export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.PRODUCTS);

export const selectData: MemoizedSelector<object, any[]> =
createSelector(getState, getData);


export const selectProductError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

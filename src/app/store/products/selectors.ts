import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';
import {product} from "../../models/products";

export const getData = (state: State): any[] => state.data;
export const getError = (state: State): string => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const getproductView = (state: State): product => state.productView;
export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.PRODUCTS);

export const selectData: MemoizedSelector<object, any[]> =
createSelector(getState, getData);


export const selectProductError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

export const selectproductView: MemoizedSelector<object, product> =
    createSelector(getState, getproductView);

import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';
import { CartModel } from 'src/app/models/cartModel';

export const getData = (state: State): any[] => state.data['result'];
export const getError = (state: State): string => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const getContnet = (state: State): CartModel => state.content;

export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.CART);

export const selectData: MemoizedSelector<object, any[]> =
createSelector(getState, getData);


export const selectProductError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

export const selectCartItems: MemoizedSelector<object, CartModel> =
createSelector(getState, getContnet);

export const selectTotal: MemoizedSelector<object, number> =
createSelector(getState, getContnet =>{
 let x=0;
  // getContnet.content.map(i =>{
  //   x += i.price * i.quanitity
  // })
  return x;
});

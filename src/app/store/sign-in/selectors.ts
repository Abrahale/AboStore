import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { signInResponse, State } from './state';
import { storeConstants } from 'src/app/constants/store-constants';
export const getData = (state: State): signInResponse | null => state.result;
export const getError = (state: State): string | null => state.error;
export const getIsLoading = (state: State): boolean => state.isLoading;
export const getUserSignedIn = (state: State): string => state.result.id ?? '';
export const getCartId = (state:State): string => state.result.cartId;
export const getUserId = (state:State): string => state.result.id;
export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.SIGN_IN);

export const selectData: (state:State) => signInResponse | null =
createSelector(getState, getData);


export const selectSignInError: MemoizedSelector<object, any> =
createSelector(getState, getError);

export const selectIsLoading: MemoizedSelector<object, boolean> =
createSelector(getState, getIsLoading);

export const selectSignInData: MemoizedSelector<object, any> =
createSelector(getState, getData);

export const selectCartId: MemoizedSelector<object,string> =
createSelector(getState, getCartId)

export const selectUserId: MemoizedSelector<object,string> =
createSelector(getState, getUserId)
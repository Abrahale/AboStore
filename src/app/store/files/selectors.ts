import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector,
  } from '@ngrx/store';
  import { State } from './state';
  import { storeConstants } from 'src/app/constants/store-constants';
  export const getFiles = (state: State): string[] => state.files;
  export const getError = (state: State): string => state.error;
  export const getIsLoading = (state: State): boolean => state.isLoading;

  export const getState: MemoizedSelector<object, State> = createFeatureSelector<State>(storeConstants.FILES);

  export const selectFiles: MemoizedSelector<object, string[]> = 
    createSelector(getState, getFiles);

  export const selectIsLoading: MemoizedSelector<object, boolean> =
    createSelector(getState, getIsLoading);
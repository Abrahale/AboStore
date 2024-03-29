import { SignInState } from "./sign-in";
import { ProductsState } from "./products";
import { CartsState } from "./cart";
import { CategoryState } from "./category";
import { DepartmentState } from "./department";
import { storeConstants }  from '../constants/store-constants'
import { ManufacturerState } from "./manufacturer";
import { FileState } from './files'
export interface State{
  [storeConstants.SIGN_IN] : SignInState.State;
  [storeConstants.PRODUCT] : ProductsState.State;
  [storeConstants.CART]: CartsState.State;
  [storeConstants.CATEGORY]: CartsState.State;
  [storeConstants.DEPARTMENT]: DepartmentState.State;
  [storeConstants.USERS]:DepartmentState.State;
  [storeConstants.MANUFACTURER]: ManufacturerState.State;
  [storeConstants.FILES]:FileState.State;
}

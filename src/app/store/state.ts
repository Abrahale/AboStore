import { SignInState } from "./sign-in";
import { ProductsState } from "./products";
import { CartsState } from "./cart";
export interface State{
  singIn:SignInState.State;
  products: ProductsState.State;
  cart: CartsState.State;
}

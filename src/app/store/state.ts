import { SignInState } from "./sign-in";
import { ProductsState } from "./products";
export interface State{
  singIn:SignInState.State;
  products: ProductsState.State;
}

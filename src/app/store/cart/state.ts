import { CartModel } from "src/app/modules/cart/models/cartModel"
import * as cartStatic from '../../config/json-files/cart.json';
export interface State{
    cart:CartModel | any,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  cart:{...cartStatic},
  isLoading: false,
  error: ""
}

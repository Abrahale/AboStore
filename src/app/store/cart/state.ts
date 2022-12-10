import { CartModel } from "src/app/models/cartModel"

export interface State{
    cart:CartModel,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  cart:{_id:'',totalItems:0,cartItem:[]},
  isLoading: false,
  error: ""
}

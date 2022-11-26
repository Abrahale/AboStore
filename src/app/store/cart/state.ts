import { CartItem, CartModel } from "src/app/models/cartModel"
import { BaseResponseModel } from "src/app/models/response-base.model"

export interface State{
    cart:CartModel,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  cart:{id:'',totalItems:0,cartItem:[]},
  isLoading: false,
  error: ""
}

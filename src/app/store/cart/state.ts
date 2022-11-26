import { CartItem, CartModel } from "src/app/models/cartModel"
import { BaseResponseModel } from "src/app/models/response-base.model"

export interface State{
    data:BaseResponseModel<any>,
    content: CartModel,
    cartItem:CartItem,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data:null,
  content:null,
  cartItem:null,
  isLoading: false,
  error: ""
}

import { CartModel } from "src/app/models/cartModel"
import { BaseResponseModel } from "src/app/models/response-base.model"

export interface State{
    data:BaseResponseModel<any>,
    content: CartModel[],
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data:null,
  content:[],
  isLoading: false,
  error: ""
}

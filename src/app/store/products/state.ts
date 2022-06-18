import { BaseResponseModel } from "src/app/models/response-base.model";
import {product} from "../../models/products";

export interface State{
    data: BaseResponseModel<any>,
    productView:product,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data: {
    status:false,
    payload:null
  },
  isLoading: false,
  error: "",
  productView:null
}

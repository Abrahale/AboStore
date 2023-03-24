import { product } from "src/app/modules/product/models/products"

export interface State{
    data: product[],
    productView:product,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data: [],
  isLoading: false,
  error: "",
  productView:new product
}

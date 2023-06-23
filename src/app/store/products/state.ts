import { IProductForm, ProductForm } from "src/app/modules/models/_product_form"
import { product } from "src/app/modules/product/models/products"

export interface State{
    data: product[],
    productView:product,
    isLoading: boolean,
    latestProductAdded?:product,
    error: string,
    _functions: {
      editMode:boolean,
      _form: IProductForm
      
    }
}
export const initialState: State = {
  data: [],
  isLoading: false,
  error: "",
  productView:new product,
  _functions:{
     editMode:false,
    _form: new ProductForm()

  }
}



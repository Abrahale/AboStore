import { BaseResponseModel } from "src/app/models/response-base.model";
import { Category } from "src/app/modules/models/category.model";

export interface State{
    data: BaseResponseModel<any> | null,
    formData: Category | null,
    isLoading: boolean,
    error: string | null

}
export const initialState: State = {
  data: null,
  isLoading: false,
  formData:null,
  error:""
}

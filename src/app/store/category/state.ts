import { BaseResponse } from "src/app/models/baseResponse.model";
import { categoryForm } from "src/app/models/categoryForm.model copy";

export interface State{
    data: BaseResponse<any> | null,
    formData: categoryForm,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
  data: null,
  isLoading: false,
  formData:null,
  error:""
}

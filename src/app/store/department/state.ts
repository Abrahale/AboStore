import { BaseResponse } from "src/app/models/baseResponse.model";
import { departmentForm } from "src/app/models/departmentForm.model";

export interface State{
    data: BaseResponse<any> | null,
    formData: departmentForm,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
  data: null,
  isLoading: false,
  formData:null,
  error:""
}

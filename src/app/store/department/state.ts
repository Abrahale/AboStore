import { BaseResponseModel } from "src/app/models/response-base.model"
import { Department } from "src/app/modules/models/department.model"


export interface State{
    data: BaseResponseModel<any> | null,
    formData: Department | null,
    isLoading: boolean,
    error: string | null

}
export const initialState: State = {
  data: null,
  isLoading: false,
  formData:null,
  error:""
}

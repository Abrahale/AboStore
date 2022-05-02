import { BaseResponseModel } from "src/app/models/response-base.model";

export interface State{
    data: BaseResponseModel<any>,
    isLoading: boolean,
    error: string
}
export const initialState: State = {
  data: {
    status:false,
    payload:null
  },
  isLoading: false,
  error: ""
}

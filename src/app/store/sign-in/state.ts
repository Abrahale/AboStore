import { BaseResponseModel } from "src/app/models/response-base.model";

export interface State{
    data: BaseResponseModel<any> | null,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
 data: null,
  isLoading: false,
  error:""
}

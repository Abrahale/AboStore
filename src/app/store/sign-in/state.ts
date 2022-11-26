import { BaseResponseModel } from "src/app/models/response-base.model";

export interface State{
    result: signInResponse,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
  result: {id:'',email:'',userName:'',cartId:''},
  isLoading: false,
  error:""
}

export interface signInResponse{
  id:string;
  email:string;
  userName:string;
  cartId:string;
}


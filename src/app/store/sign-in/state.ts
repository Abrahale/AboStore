import { BaseResponseModel } from "src/app/models/response-base.model";

export interface State{
    result: signInResponse,
    isLoading: boolean,
    error: string

}
export const initialState: State = {
  result: {id:'6359cbe753130be7ca5cdd02',email:'ab@abostore.com',userName:'Abrahale',cartId:'63826a40a35d1904c3480e6e'},
  isLoading: false,
  error:""
}

export interface signInResponse{
  id:string;
  email:string;
  userName:string;
  cartId:string;
}


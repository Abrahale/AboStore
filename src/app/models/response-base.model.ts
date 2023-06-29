export interface BaseResponseModel<T>{
  message:string,
  result: T;
  status:number,
  success:boolean
}

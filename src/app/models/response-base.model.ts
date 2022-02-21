export interface BaseResponseModel<T>{
  status: boolean;
  payload: T;
}

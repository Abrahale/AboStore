export interface State{
    data:any,
    isLoading:boolean,
    error:any
}

export const  initialState:State = {
    data:null,
    isLoading:false,
    error:null
}
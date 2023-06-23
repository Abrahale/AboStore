export interface State{
    files:string[],
    isLoading:boolean,
    error:string
}

export const  initialState:State = {
    files:[],
    isLoading:false,
    error:null
}
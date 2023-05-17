import { State, initialState } from "./state";
import { ActionTypes, Actions } from "./actions";
export function ManufacturerReducer(state = initialState, action:Actions):State{
    switch(action.type){
        case ActionTypes.LOAD_REQUEST : {
            return {
                ...state,
                isLoading:true
            }
        }
        
        case ActionTypes.SUCCESS_REQUEST : {
            return {
                ...state,
                data:action.payload,
                isLoading:false
            }
        }

        case ActionTypes.FAIL_REQUEST : {
            return {
                ...state,
                error: action.payload,
                isLoading:false
            }
        }

        default:
            return state
    }
}
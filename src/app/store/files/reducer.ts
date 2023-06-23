import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";

export function FilesReducer(state = initialState, action: Actions): State{
    switch(action.type){
        case ActionTypes.LOAD_REQUEST : {
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        }

        case ActionTypes.LOAD_SUCCESS : {
            return {
              ...state,
              files:action.payload,
              isLoading: false,
              error: ""
            }
        }

        case ActionTypes.LOAD_FAILURE : {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error,
        }

        }

        default: return state;
    }
}
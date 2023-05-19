import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function UsersReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST:  
      case ActionTypes.ADD_NEW_USER_LOAD_REQUEST : {
        return {
          ...state,
          isLoading: true,
          error: null
        }
      }

      case ActionTypes.LOAD_SUCCESS : {
        return {
          ...state,
          data:action.payload.data,
          isLoading: false,
          error: null
        }
      }

      case ActionTypes.LOAD_FAILURE : {
        return {
          ...state,
          isLoading: false,
          error: action.payload.error,
        }
      }

      case ActionTypes.UPDATE_FORMINPUT : {
        return {
          ...state,
          isLoading: false,
          //formData: action.payload,
        }
      }

      case ActionTypes.DELET_USER : {
        return {
          ...state,
          isLoading:true,
        }
      }

      default: return state;
  }
}

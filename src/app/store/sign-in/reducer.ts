import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function SignInReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST :
      case  ActionTypes.REGISTER_LOAD_REQUEST:  
      {
        return {
          ...state,
          isLoading: true,
          error: ''
        }
      }
      case ActionTypes.LOAD_SUCCESS : {
        return {
          ...state,
          result:action.payload,
          isLoading: false,
          error: ''
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

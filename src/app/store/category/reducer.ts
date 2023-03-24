import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function CategoryReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST : {
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
          formData: action.payload,
        }
      }

      default: return state;
  }
}

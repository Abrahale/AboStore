import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function CategoryReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST :
      case ActionTypes.DELETE_CATEGORY: 
      {
        return {
          ...state,
          isLoading: true,
          error: null
        }
      }
      case ActionTypes.LOAD_SUCCESS : {
        return {
          ...state,
          data:action.payload.result,
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

      case ActionTypes.ADD_NEW_CATEGORY_REQUEST : {
        return {
          ...state,
          isLoading: true,
        }
      }

      default: return state;
  }
}

import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function DepartmentReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST :
      case ActionTypes.DELETE_DEPARTMENT :   
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

      case ActionTypes.ADD_NEW_DEPARTMENT : {
        return {
          ...state,
          isLoading: true,
        }
      }

      case ActionTypes.ADD_NEW_DEPARTMENT_SUCCESS : {
        return {
          ...state,
          isLoading: false,
        }
      }

      default: return state;
  }
}

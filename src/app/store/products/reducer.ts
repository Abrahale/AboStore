import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function ProductsReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST : {
        return {
          ...state,
          isLoading: true,
          error: ''
        }
      }
      case ActionTypes.LOAD_SUCCESS : {
        return {
          ...state,
          data:action.payload.data,
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
      case ActionTypes.UPDATE_PRODUCT_VIEW : {
          return {
              ...state,
              productView: action.payload,
              isLoading: false,
              error:'',
          }
      }

      default: return state;
  }
}

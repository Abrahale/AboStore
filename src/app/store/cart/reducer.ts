import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
export function CartsReducer(state = initialState, action: Actions): State{
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
      case ActionTypes.ADD_TO_CART : {
        return {
          ...state,
          isLoading: false,
          content: [...state.content,action.payload.cartModel],
          error:null
        }
      }

      default: return state;
  }
}

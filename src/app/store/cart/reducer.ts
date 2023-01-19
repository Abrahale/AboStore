import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
import { ContentChild } from "@angular/core";
export function CartsReducer(state = initialState, action: Actions): State{
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
          cart:action.payload,
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
    // Delete Single
    case ActionTypes.DELETE_ITEM:
      return {...state, 
        isLoading:true,
        //content: state.content.cartItem.filter(item => item.id !== action.payload),
        error: ""
      }
    // Delete All
    case ActionTypes.DELETE_All_ITEM:
        return initialState;
    // Update
    case ActionTypes.UPDATE_ITEM_QTY:
       return { ...state,
        isLoading: true,
        //content: action.payload,
        error:""
      }
      default: return state;
  }
}

import { initialState, State } from "./state";
import { Actions, ActionTypes} from "./actions";
import { ProductForm } from "src/app/modules/models/_product_form";
export function ProductsReducer(state = initialState, action: Actions): State{
  switch(action.type){
      case ActionTypes.LOAD_REQUEST :
      case ActionTypes.ADD_NEW_PRODUCT:  
      case ActionTypes.REMOVE_PRODUCT_ACTION:
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
          data:action.payload.data.result,
          isLoading: false,
          error: ''
        }
      }
      case ActionTypes.LOAD_SUCCESS_NO_SIDE_EFFECT: {
        return{
          ...state,
          isLoading:false
        }
      }
      case ActionTypes.ADD_NEW_PRODUCT_SUCCESS: {
        return{
          ...state,
          isLoading:false,
          latestProductAdded:action.payload
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

      case ActionTypes.UPDATE_FORM_ACTION:{
        return {
          ...state,
          isLoading:false,
          error:'',
          _functions:{
            ...state._functions,
            editMode:action.payload.editMode,
            _form: {...state._functions._form, ...Object.assign(new ProductForm(),action.payload.data)}
          }
        }
      }

      case ActionTypes.RESET_PRODUCT_FORM:{
        return {
            ...state,
            _functions:initialState._functions
        }
      }
      default: return state;
  }
}

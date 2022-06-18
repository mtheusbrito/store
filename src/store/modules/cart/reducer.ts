import { Reducer } from "redux";
import { ActionTypes, ICartState } from "./types";
import produce from 'immer';
import { toast} from 'react-toastify'
const INITIAL_STATE: ICartState ={
  items: [],
  failsStockCheck:[]
}
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) =>{

return produce(state, (draft) => {
  switch (action.type) {
    case ActionTypes.addProductToCartSuccess: {
      const { product } = action.payload;

      const productInCartIndex = draft.items.findIndex(
        (item) => item.product.id === product.id
      );
      if (productInCartIndex >= 0) {
        draft.items[productInCartIndex].quantity++;
      } else {
        draft.items.push({ product, quantity: 1 });
      }
      break;
    }

    case ActionTypes.addProductToCartFailure: {

      console.log('failure', action.payload)
      draft.failsStockCheck.push(action.payload.productId)
      toast.error(action.payload.message)
      
      break;
    }
    default: {
      return draft;
    }
  }
});  
  
  
}
export 
default cart;
import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest} from 'redux-saga/effects';
import { IState } from '../..';
import { api } from '../../../services/api';

import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes, IProduct } from './types';


type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
interface IStockResponse{
  id:number;
  quantity: number;
}
export function* checkProductToStock(action: CheckProductStockRequest) {
const {product }  = action.payload;
 
const currentQuantity: number = yield select((state:IState) => {
  return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
});

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)
  if(availableStockResponse.data.quantity> currentQuantity){
    yield put(addProductToCartSuccess(product))
    
  }else{
    
    yield put(addProductToCartFailure(product.id, 'Falta de estoque!'));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductToStock)]);

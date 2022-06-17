import { configureStore,createSlice } from '@reduxjs/toolkit';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
export interface IState{
  cart: ICartState
}
export const store = configureStore({
  reducer: rootReducer
});

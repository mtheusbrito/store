import { configureStore,createSlice } from '@reduxjs/toolkit';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga';
export interface IState{
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware();
const middlers= [ sagaMiddleware]
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlers
});

 sagaMiddleware.run(rootSaga);

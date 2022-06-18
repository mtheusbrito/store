export interface IProduct {
  id: number;
  title: number;
  price: number;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICartItem[];
  failsStockCheck: number[]
}

export enum ActionTypes {
  addProductToCartRequest = 'ADD_TO_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_TO_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_TO_PRODUCT_TO_CART_FAILURE',
}

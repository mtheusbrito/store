import React, { useCallback } from 'react';
import { ICartItem, IProduct } from '../../store/modules/cart/types';
import { ShoppingCartSimple } from 'phosphor-react'
// import { Container } from './styles';
import styles from './index.module.css'
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { useDispatch } from 'react-redux';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

interface ItemProps{
  product: IProduct;
}
const Item: React.FC<ItemProps> = ({product}) => {


    const currentQuantity = useSelector<IState, number>((state) => {
      return (
        state.cart.items.find((item) => item.product.id === product.id)
          ?.quantity ?? 0
      );
    });

      const dispatch = useDispatch();

      // const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
      //   return state.cart.failsStockCheck.includes(product.id);
      // });

      const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
      }, [dispatch, product]);

  
  return (
    <div className={styles.item}>
      <img src={product.urlImage} alt={`Imagem do produto ${product.title}`} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(product.price)}
      </p>
      <div className={styles.footer}>
        <div>
          <ShoppingCartSimple />
          {currentQuantity}
        </div>
        <button type='button' onClick={handleAddProductToCart}>Adicionar</button>
      </div>
    </div>
  );
};

export default Item;
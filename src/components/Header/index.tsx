import React from 'react';
import { ShoppingCart } from 'phosphor-react'
// import { Container } from './styles';
import styles from './index.module.css';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
const Header: React.FC = () => {

  const items = useSelector<IState, ICartItem[]>(state =>{return state.cart.items})
  return (
    <header className={styles.header}>
      <a href="">Store</a>
      <div>
        <div>
          <span>Carrinho</span>
          <small>
            {items.length}
            {items.length === 1 ? ` item` : ` itens`}
          </small>
        </div>
        <a href='' className={styles.buttonCart} type='button' title="Visualizar carrinho">
          <ShoppingCart />
        </a>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

const CartList = ({products}) => {
  const productsCart = Object.entries(products);
  return (
    <ul className="container cart__list">
      <p className="cart__list-title">Seu carrinho</p>
      {
        productsCart.length > 0
        ? productsCart.map(product => <CartItem product={product[1].product} key={product[0]}/>)
        : <p className="cart__list-empty">Seu carrinho ainda está vazio</p>
        }
    </ul>
  )
}

export default CartList

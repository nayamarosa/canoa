import React from 'react';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

const CartList = ({products}) => {
  return (
    <ul className="container cart__list">
      <p className="cart__list-title">Seu carrinho</p>
      {
        products.length > 0
        ? products.map(product => <CartItem product={product} key={product.code_color}/>)
        : <p className="cart__list-empty">Seu carrinho ainda está vazio</p>
        }
    </ul>
  )
}

export default CartList

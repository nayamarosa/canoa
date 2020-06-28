import React from 'react';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

const CartList = ({products}) => {
  return (
    <ul className="container cart__list">
      <p className="cart__list-title">Seu carrinho</p>
      {products.map(product => <CartItem product={product} key={product.code_color}/>)} 
    </ul>
  )
}

export default CartList

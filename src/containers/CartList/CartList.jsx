import React from 'react';

import CartItem from '../../components/CartItem';

const CartList = ({products}) => {
  console.log(products)
  return (
    <ul className="container cart__list">
      {products.map(product => <CartItem product={product} key={product.code_color}/>)} 
    </ul>
  )
}

export default CartList

import React from 'react';
import { useSelector } from 'react-redux';

import CartList from '../../containers/CartList';

const ShoppingCart = () => {
  const productsInShoppingCart = useSelector(store => store.shoppingCart.cart);

  return (
    <CartList products={productsInShoppingCart}/>
  );
}  

export default ShoppingCart 
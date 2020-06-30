import React from 'react';
import { useSelector } from 'react-redux';

import CartList from '../../containers/CartList';

export default function ShoppingCart() {
  const productsInShoppingCart = useSelector(store => store.shoppingCart.cart);

  return (
    <>
    <CartList products={productsInShoppingCart}/>
    </>
    );
  }  
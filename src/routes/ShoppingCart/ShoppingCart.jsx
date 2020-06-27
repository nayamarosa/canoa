import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../actions/catalog';

import CartList from '../../containers/CartList';

export default function ShoppingCart() {
  const products = useSelector(store => store.catalog.products);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
}, [dispatch])

  return (
    <>
    <div>Aqui vai o carrinho</div>
    <CartList products={products}/> 
    </>
    );
  }  
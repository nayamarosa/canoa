import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

import Button from '../../components/base/Button';

const CartList = ({products}) => {
  const history = useHistory();
  const productsCart = Object.entries(products);

  let price = productsCart.map(product => parseFloat(product[1].product.actual_price.replace(/[^0-9,-]+/g,"").replace(',','.')))
  let sum = price.reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
  }, 0).toFixed(2);
  let installmentsQuantity = 3
  let installments = (sum / installmentsQuantity).toFixed(2);

  const handleClickToCart = (e) => {
    e.preventDefault()
    history.push('/');
  }

  return (
    <>
    <ul className="container cart__list">
      <p className="cart__list-title">Seu carrinho</p>
      {
        productsCart.length > 0
        ? productsCart.map(product => <CartItem productInfoCart={product} product={product[1].product} key={product[0]}/>)
        : <p className="cart__list-empty">Seu carrinho ainda está vazio</p>
        }
    </ul>
    <div className="container cart__list-total">
      <p>Valor total</p>
      <h5>R$ {sum.replace('.', ',')}</h5>
      <span>Em até 3x de R$ {installments.replace('.', ',')}</span>
    </div>
    <Button 
      type="submit"
      classNameBtn="container btn__primary btn__primary--bigger"
      text="Continuar comprando"
      onClick={(e) => handleClickToCart(e)}
    />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--green"
        text="Finalizar compra"
      />
    </>
  )
}

export default CartList

import React from 'react';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

import Button from '../../components/base/Button';

const CartList = ({products}) => {
  let priceDot = products.map(product => product.actual_price.replace(/[^0-9,-]+/g,"").replace(',','.'))
  console.log(priceDot);
  let price = products.map(product => parseFloat(product.actual_price.replace(/[^0-9,-]+/g,"")))
  console.log(price);
  let sum = price.reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
}, 0);
console.log(sum);
  let installments = sum / 3;

  return (
    <>
    <ul className="container cart__list">
      <p className="cart__list-title">Seu carrinho</p>
      {
        products.length > 0
        ? products.map(product => <CartItem product={product} key={product.code_color}/>)
        : <p className="cart__list-empty">Seu carrinho ainda está vazio</p>
        }
    </ul>
    <div className="container cart__list-total">
      <p>Valor total</p>
      <h5>R$ {sum}</h5>
      <span>Em até 3x de R$ {installments}</span>
    </div>
    <Button 
      type="submit"
      classNameBtn="container btn__primary btn__primary--bigger"
      text="Continuar comprando"
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

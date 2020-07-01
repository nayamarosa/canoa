import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../components/CartItem/CartItem.scss';
import CartItem from '../../components/CartItem';

import Button from '../../components/base/Button';

const CartList = ({products}) => {
  const history = useHistory();
  const productsCart = Object.entries(products);
  
  const price = productsCart.map(product => 
    parseFloat(product[1].product.actual_price.replace(/[^0-9,-]+/g,"").replace(',','.')) 
    * (product[1].quantity))
  
  const sum = price.reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
  }, 0).toFixed(2);

  const installmentsQuantity = 3
  const installments = (sum / installmentsQuantity).toFixed(2);

  const handleClickToHome = (e) => {
    e.preventDefault()
    history.push('/');
  }

  const handleClickToCheckout = (e) => {
    e.preventDefault()
    history.push('/checkout');
  }

  return (
    <section className="container cart">
      <ul className="cart__list">
        <p className="cart__list-title">Seu carrinho</p>
        {
          productsCart.length > 0
          ? productsCart.map(([code, value]) => <CartItem 
          productCode={[code]} 
          value={value} 
          key={[code]}/>)
          : <p className="cart__list-empty">Seu carrinho ainda está vazio</p>
          }
      </ul>
      {
        productsCart.length > 0
        ? <><div className="cart-total">
            <p>Valor total</p>
            <h5>R$ {sum.replace('.', ',')}</h5>
            <span>Em até 3x de R$ {installments.replace('.', ',')}</span>
          </div>
          <div className="cart-btn">
            <Button 
              type="submit"
              classNameBtn="btn__primary btn__primary--bigger"
              text="Continuar comprando"
              onClick={(e) => handleClickToHome(e)}
            />
            <Button 
              type="submit"
              classNameBtn="btn__secondary btn__secondary--green"
              text="Finalizar compra"
              onClick={(e) => handleClickToCheckout(e)}
            />
          </div></>
        : <div className="cart-btn cart-btn--empty">
            <Button 
              type="submit"
              classNameBtn="btn__primary btn__primary--bigger"
              text="Continuar comprando"
              onClick={(e) => handleClickToHome(e)}
            />
          </div>
      }
    </section>
  )
}

export default CartList

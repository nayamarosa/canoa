import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, addItem, subtractItem } from '../../actions/shoppingCart';

import CartItem from '../../components/CartItem';
import Button from '../../components/base/Button';

const CartList = ({products}) => {
  const history = useHistory();
  const dispatch = useDispatch()
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
    const catalogLocalStorage = localStorage.getItem('persist:CANOA');
    const parseObj = JSON.parse(catalogLocalStorage);
    const deleteObj = delete parseObj.shoppingCart;
    const newObjStore = Object.assign({...parseObj}, deleteObj)
    console.log(newObjStore)
    localStorage.removeItem(catalogLocalStorage)
    localStorage.setItem('persist:CANOA', JSON.stringify(newObjStore));    
    document.location.reload(false);
    history.push('/finalizacao-do-pedido');
  }

  const handleRemoveProductInCart = (e, code, size, product) => {
    e.preventDefault()
    dispatch(removeProductFromCart(product, size));
  }

  const handleAddItem = (e, code) => {
    e.preventDefault()
    dispatch(addItem(code));
  }

  const handleSubtractItem = (e, code, value) => {
    e.preventDefault()
    return (value.quantity !== 1) ? dispatch(subtractItem(code)) : false;
  }

  return (
    <section className="container cart">
      <ul className="cart__list">
        <p className="cart__list-title">Seu carrinho</p>
        {
          productsCart.length > 0
          ? productsCart.map(([code, value]) => {
              const product = value.product;
              return <CartItem 
              product={product}
              productCode={[code]} 
              value={value} 
              key={[code]}
              onClickSubtract={(e) => handleSubtractItem(e, [code], value)}
              onClickAdd={(e) => handleAddItem(e, [code])}
              onClickRemove={(e) => handleRemoveProductInCart(e, product.code_color, value.size, product)}
              />
            })
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

export default CartList;

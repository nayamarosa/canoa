import React from 'react';
import './CartItem.scss';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, addItem, subtractItem } from '../../actions/shoppingCart';
import Button from '../base/Button';
import Image from '../base/Image';

import ProductInfo from '../ProductInfo';

const CartItem = ({value, productCode}) => {
  const dispatch = useDispatch()
  const product = value.product;

  const handleRemoveProductInCart = (e, code) => {
    e.preventDefault()
    dispatch(removeProductFromCart(product, code));
  }

  const handleAddItem = (e, code) => {
    e.preventDefault()
    dispatch(addItem(code));
  }

  const handleSubtractItem = (e, code) => {
    e.preventDefault()
    return (value.quantity !== 1) ? dispatch(subtractItem(code)) : false;
  }

  return (
  <>  
    <li className="cart__item">
        <Image 
          classNameimage="image__product--cart"
          src={product.image}
          alt={product.name}
        />
        <div className="cart__item-align">
          <section className="cart__item-text-group">
            <ProductInfo 
              classNamePriceGroup="product-info__price-group--cart"
              productName={product.name}
              classNamePrice="product-info__price--cart"
              oldPriceText="De"
              oldPriceValue={product.regular_price}
              priceValue={product.actual_price}
            />
            <p className="cart__item-size">Tamanho: <span>{value.size}</span></p>
            <div className="cart__item-quantity">
              <p>Quantidade:</p>
              <Button 
              type="button"
              classNameBtn="btn__icon btn__icon--quantity"
              icon="fas fa-minus"
              onClick={(e) => handleSubtractItem(e, productCode)}
              />
              <span>{value.quantity}</span>
              <Button 
              type="button"
              classNameBtn="btn__icon btn__icon--quantity"
              icon="fas fa-plus"
              onClick={(e) => handleAddItem(e, productCode)}
              />
            </div>
          </section>
          <Button 
            type="button"
            classNameBtn="btn__icon btn__icon--remove"
            icon="fas fa-trash-alt"
            onClick={(e) => handleRemoveProductInCart(e, product.code_color)}
          />
        </div>
    </li>
  </>
  )
}

export default CartItem;
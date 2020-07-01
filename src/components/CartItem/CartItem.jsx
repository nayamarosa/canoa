import React from 'react';

import Button from '../base/Button';
import Image from '../base/Image';
import ProductInfo from '../ProductInfo';

const CartItem = ({product, value, onClickSubtract, onClickAdd, onClickRemove}) => {
  return (
  <>  
    <li className="cart__item">
        <Image 
          classNameImage="image__product--cart"
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
              onClick={onClickSubtract}
              />
              <span>{value.quantity}</span>
              <Button 
              type="button"
              classNameBtn="btn__icon btn__icon--quantity"
              icon="fas fa-plus"
              onClick={onClickAdd}
              />
            </div>
          </section>
          <Button 
            type="button"
            classNameBtn="btn__icon btn__icon--remove"
            icon="fas fa-trash-alt"
            onClick={onClickRemove}
          />
        </div>
    </li>
  </>
  )
}

export default CartItem;
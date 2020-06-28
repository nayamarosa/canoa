import React from 'react';
import './CartItem.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

const CartItem = ({product, onClick}) => {
  return (
  <>  
    <li className="cart__item">
      <a href="/">
        <Banner 
          classNameBanner="banner__product--cart"
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
            <p className="cart__item-size">Tamanho: <span>G</span></p>
            <div className="cart__item-quantity">
              <p>Quantidade:</p>
              <Button 
              type="button"
              classNameBtn="btn__icon btn__icon--quantity"
              icon="fas fa-minus"
              />
              <span>1</span>
              <Button 
              type="button"
              classNameBtn="btn__icon btn__icon--quantity"
              icon="fas fa-plus"
              />
            </div>
          </section>
          <Button 
            type="button"
            classNameBtn="btn__icon btn__icon--remove"
            icon="fas fa-trash-alt"
          />
        </div>
      </a>
    </li>
  </>
  )
}

export default CartItem;
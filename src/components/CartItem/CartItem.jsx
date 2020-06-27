import React from 'react';
import './CartItem.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

const CartItem = ({product, onClick}) => {
  return (
  <>  
    <li>
      <a href="/" className="cart__item">
        <Banner 
          classNameBanner="banner__product--cart"
          src={product.image}
          alt={product.name}
          classNameDiscount="banner__product--search-discount"
          percent={product.discount_percentage}
        />
        <div>
          <ProductInfo 
            classNamePriceGroup="product-info__price-group--search"
            productName={product.name}
            oldPriceText="De"
            oldPriceValue={product.regular_price}
            priceValue={product.actual_price}
          />
          <p>Tamanho: <span>G</span></p>
          <div>
            <p>Quantidade:</p>
            <Button 
            type="button"
            classNameBtn="btn__icon"
            icon="fas fa-minus"
            />
            <span>1</span>
            <Button 
            type="button"
            classNameBtn="btn__icon"
            icon="fas fa-plus"
            />
          </div>
        </div>
      </a>
    </li>
  </>
  )
}

export default CartItem;
import React from 'react';
import './CartItem.scss';

// import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

const CartItem = ({product, onClick}) => {
  return (
  <>  
    <li className="search__item">
      <a href="/">
        <Banner 
          classNameBanner="banner__product banner__product--search"
          src={product.image}
          alt={product.name}
          classNameDiscount="banner__product--search-discount"
          percent={product.discount_percentage}
        />
        <ProductInfo 
          classNamePriceGroup="product-info__price-group--search"
          productName={product.name}
          oldPriceText="De"
          oldPriceValue={product.regular_price}
          priceValue={product.actual_price}
        />
      </a>
    </li>
  </>
  )
}

export default CartItem;
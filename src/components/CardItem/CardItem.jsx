import React from 'react';
import { Link } from "react-router-dom";

import './CardItem.scss';

import Button from '../base/Button';
import Image from '../base/Image';
import ProductInfo from '../ProductInfo';

const CardItem = ({product, onClick}) => {
  return (
  <>  
    <li className="card__item">
      <Link to="/" onClick={onClick}>
        <Image
          classNameImage="image__product image__product--card"
          src={product.image}
          alt={product.name}
          classNameDiscount="image__product--discount"
          percent={product.discount_percentage}
        />
        <ProductInfo
          productName={product.name}
          oldPriceText="De"
          oldPriceValue={product.regular_price}
          priceValue={product.actual_price}
        />
        <div className="btn--center btn--card">
          <Button 
            type="button"
            classNameBtn="btn__primary btn__primary-buy"
            text="Comprar"
          />
        </div>
      </Link>
    </li>
  </>
  )
}

export default CardItem;
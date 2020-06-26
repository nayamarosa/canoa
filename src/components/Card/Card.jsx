import React from 'react';
import { useHistory } from "react-router-dom";
import './Card.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

const Card = ({product}) => {
  let history = useHistory();

const handleClickBuy = (e) => {
  history.push('/produto');
}

  return (
  <>  
    <li className="card__item">
        <Banner
          classNameBanner="banner__product banner__product--card"
          src={product.image}
          alt={product.name}
          classNameDiscount="banner__product--discount"
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
            onClick={(e) => handleClickBuy(e)}
          />
        </div>
    </li>
  </>
  )
}

export default Card;
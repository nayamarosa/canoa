import React from 'react';
import { Link } from "react-router-dom";
import './Card.scss';
import Button from '../base/Button';
import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';

const Card = ({product, onClick}) => {
  return (
  <>  
    <li className="card__item">
      <Link to="/" onClick={onClick}>
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
          />
        </div>
      </Link>
    </li>
  </>
  )
}

export default Card;
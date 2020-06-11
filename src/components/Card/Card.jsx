import React from 'react';

import './Card.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';
import ProductInfo from '../base/ProductInfo';

export default function Card() {
  return (
    <li className="card__item">
      <a href="/">
        <Banner
          className="banner__product-card"
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
          alt="Nome da roupa"
          classNameDiscount="banner__product-card--discount"
          percent= "50%"
        />
        <div className="card__item-text-group">
          <h4>Nome da roupa</h4>
          <div className="card__item-text-group-align">
            <ProductInfo
              oldPriceText="De"
              oldPriceValue="R$ 200"
              priceValue="R$ 100"
            />
            <Button 
              type="submit"
              className="btn__primary btn__primary-buy"
              text="Comprar"
            />
          </div>
        </div>
      </a>
    </li>
  )
}
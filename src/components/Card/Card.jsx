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
          className="banner__product banner__product-card"
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
          alt="Nome da roupa"
          classNameDiscount="banner__product--discount"
          percent= "50%"
        />
        <ProductInfo
          productName="Nome da Roupa"
          oldPriceText="De"
          oldPriceValue="R$ 200"
          priceValue="R$ 100"
          
          //Button
          type="submit"
          classNameBtn="btn__primary btn__primary-buy"
          text="Comprar"
        />
      </a>
    </li>
  )
}
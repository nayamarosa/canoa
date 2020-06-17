import React, { useState, useEffect } from 'react';

import './Card.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

export default function Card({product}) {
  return (
  <>
  <li className="card__item">
      <a href="/">
        <div className="card__item-image-group">
          <img src={product.image} alt={product.name}/>
          <div className="card__item-image-group--discount">
          <span>{product.discount_percentage}</span>
          <span>OFF</span>
          </div>
        </div>
        <div className="card__item-text-group">
          <h4>{product.name}</h4>
          <div className="card__item-text-group-align">
            <div className="card__item-text-group-price">
              <p>
                De <span className="card__item-text-group-price--old">{product.regular_price}</span>
              </p>
              <p>
                Por <span className="card__item-text-group-price--new">{product.actual_price}</span>
              </p>
            </div>
            <Button 
              type="submit"
              className="btn__primary btn__primary-buy"
              text="Comprar"
            />
          </div>
        </div>
      </a>
    </li>
  
    {/* <li className="card__item">
      <a href="/">
        <Banner
          classNameBanner="banner__product banner__product--card"
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
          alt="Nome da roupa"
          classNameDiscount="banner__product--discount"
          percent= "50%"
        />
        <ProductInfo
          productName="Nome da Roupa"
          oldPriceText="De"
          oldPriceValue="R$ 200,00"
          priceValue="R$ 100,00"
        />
        <div className="btn--center btn--card">
          <Button 
            type="submit"
            classNameBtn="btn__primary btn__primary-buy"
            text="Comprar"
          />
        </div>
      </a>
    </li> */}
  </>
  )
}
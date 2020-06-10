import React from 'react';

import './Card.scss'

import Button from '../base/Button'

export default function Card() {
  return (
    <li className="card__item">
      <a href="/">
        <div className="card__item-image-group">
          <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
          <div className="card__item-image-group--discount">
          <span>50%</span>
          <span>OFF</span>
          </div>
        </div>
        <div className="card__item-text-group">
          <h4>Nome da roupa</h4>
          <div className="card__item-text-group-align">
            <div className="card__item-text-group-price">
              <span>R$ 200</span>
              <p>R$ 100</p>
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
  )
}
import React from 'react';

import './Card.scss'

import Button from '../base/Button'

export default function Card() {
  return (
    <a href="/">
      <li>
        <img src="" alt=""/>
        <span>50% off</span>
        <h4>Nome da roupa</h4>
        <span>preço antigo</span>
        <p>preço novo</p>
        <Button 
          type="submit"
          className="btn__primary btn__primary-buy"
          text="Comprar"
        />
      </li>
    </a>
  )
}
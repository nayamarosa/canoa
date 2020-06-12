import React from 'react';

import './Header.scss';
import '../Search/Search.scss';

import Button from '../base/Button';
import Input from '../base/Input'

import Search from '../Search';

export default function (props) {
  return (
    <header className="container header">
      <nav className="header__nav">
        <div className="header__nav-align">
          <a href="/" className="header__logo">
            <h1>Projeto Loja</h1>
          </a>
          <div className="header__search">
            <Button 
              type="submit"
              classNameBtn="btn__icon btn__icon--pink"
              icon="fas fa-search"
            />
          </div>
          <div className="search__input">
            <Input 
              classNameInputGroup="input__search-position"
              type="text"
              placeholder="o que você procura?"
              classNameInput="input__search"
            />
            <Button 
              id="serach-btn"
              type="submit"
              classNameBtn="btn__icon btn__icon--pink"
              icon="fas fa-times"
            />
          </div>
        </div>
        <Button 
          type="submit"
          classNameBtn="btn__icon"
          icon="fas fa-shopping-cart"
        />
        <Search 
          classNameBanner="banner__product banner__product--search"
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
          alt="Nome da roupa"
          classNameDiscount="banner__product--search-discount"
          percent= "50%"

          classNamePriceGroup="product-info__price-group--search"
          productName="Nome da Roupa"
          oldPriceText="De"
          oldPriceValue="R$ 200,00"
          priceValue="R$ 100,00"
        />
      </nav>
    </header>
    )
  }
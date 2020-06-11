import React from 'react';

import './Header.scss';

import Button from '../base/Button';
import Input from '../base/Input'

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
            <div id="search-class" className="header__search-click">
              <Input 
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
      </nav>
    </header>
    )
  }
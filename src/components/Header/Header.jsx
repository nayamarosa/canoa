import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import './Header.scss';
import '../Search/Search.scss';

import Button from '../base/Button';
import Input from '../base/Input'

import Search from '../Search';
import SearchList from '../../containers/SearchList';

const Header = (props) => {
  const [openInputSearch, setOpenInputSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [listSearch, setListSearch] = useState({});

  const handleOpenInputSearch = (state) => {
    let showInput = document.querySelector('.search__input');
    let showList = document.querySelector('.search__list');
    
    if (!state) {
      let inputSearch = document.querySelector('.input__search');
      showInput.classList.add('search__input--open');
      showList.classList.add('search__list--open');
      inputSearch.focus();
    } else if (state){
      showInput.classList.remove('search__input--open');
      showList.classList.remove('search__list--open');
    }
  }
  
  const handleListSearch = (e) => {
    let inputValue = e.target.value;
    setInputSearch(inputValue)
    
    let filterInput = listSearch.filter(product =>  
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    setListSearch(filterInput)
  }

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
              click={() => handleOpenInputSearch(setOpenInputSearch(!openInputSearch))}
            />
          </div>
          <div className="search__input">
            <Input 
              classNameInputGroup="input__search-position"
              type="text"
              placeholder="o que você procura?"
              classNameInput="input__search"
              change={(e) => handleListSearch(e)}
            />
            <Button 
              id="search-btn"
              type="submit"
              classNameBtn="btn__icon btn__icon--pink"
              icon="fas fa-times"
              click={() => handleOpenInputSearch(!setOpenInputSearch(openInputSearch))}
            />
          </div>
        </div>
        <Button 
          type="submit"
          classNameBtn="btn__icon"
          icon="fas fa-shopping-cart"
        />
        <SearchList>
          <Search 
            src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
            alt="Nome da roupa"
            percent= "50%"
  
            productName="Nome da Roupa"
            oldPriceText="De"
            oldPriceValue="R$ 200,00"
            priceValue="R$ 100,00"
          />
        </SearchList>
      </nav>
    </header>
    )
}

export default Header;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { openSearch, closeSearch, inputSearch } from '../../actions/search';

import './Header.scss';
import '../Search/Search.scss';

import Button from '../base/Button';
import Input from '../base/Input'

import SearchList from '../../containers/SearchList';

const Header = () => {  
  let history = useHistory();
  const productsFiltered = useSelector(store => store.search.filtered);
  const dispatch = useDispatch()

  const handleClickToCart = (e) => {
    history.push('/carrinho-de-compras');
  }
  
  return (
    <header className="container header">
      <nav className="header__nav">
        <div className="header__nav-align">
          <Link to="/" className="header__logo">
              <h1>CANOÁ</h1>
          </Link>
          <div className="header__search">
            <Button 
              type="submit"
              classNameBtn="btn__icon btn__icon--pink"
              icon="fas fa-search"
              onClick={() => dispatch(openSearch(true))}
            />
          </div>
          <div className="search__input">
            <Input 
              classNameInputGroup="input__search-position"
              type="text"
              placeholder="o que você procura?"
              classNameInput="input__search"
              handleChange={(e) => dispatch(inputSearch(e, e.target.value))}
            />
            <Button 
              id="search-btn"
              type="submit"
              classNameBtn="btn__icon btn__icon--pink"
              icon="fas fa-times"
              onClick={() => dispatch(closeSearch(true))}
            />
          </div>
        </div>
        <Button 
          type="submit"
          classNameBtn="btn__icon"
          icon="fas fa-shopping-cart"
          onClick={(e)=> handleClickToCart(e)}
        />       
        <SearchList listSearch={productsFiltered} />
      </nav>
    </header>
    )
}

export default Header;
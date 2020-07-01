import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openSearch, closeSearch, inputSearch } from '../../actions/search';

import Button from '../base/Button';
import Input from '../base/Input'
import SearchList from '../../containers/SearchList';

const Header = () => {  
  let history = useHistory();
  const productsFiltered = useSelector(store => store.search.filtered);
  const dispatch = useDispatch()
  let quantity = Object.keys(useSelector(store => store.shoppingCart.cart)).length;

  const handleClickToCart = (e, code) => {
    history.push('/carrinho-de-compras');
  }
  
  return (
    <header className="container header" data-testid="header">
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
        <div className="header__cart">
          <Button 
            type="submit"
            classNameBtn="btn__icon"
            icon="fas fa-shopping-cart"
            onClick={(e, code)=> handleClickToCart(e, code)}
          />
          {
            quantity > 0
            ? <div className="header__cart-quantity">
              <p>{quantity}</p>
            </div>
            : false
          }
          
        </div>
        <SearchList listSearch={productsFiltered} />
      </nav>
    </header>
  )
}

export default Header;
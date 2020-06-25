import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext } from '../../containers/context'

import './Header.scss';
import '../Search/Search.scss';

import Button from '../base/Button';
import Input from '../base/Input'

import SearchList from '../../containers/SearchList';

const Header = () => {
  const products = useContext(ProductsContext)

  const [openInputSearch, setOpenInputSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [listSearch, setListSearch] = useState([])

  const handleOpenInputSearch = (state) => {
    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')

    if (!state) {
      const inputSearch = document.querySelector('.input__search')
      showInput.classList.add('search__input--open')
      showList.classList.add('search__list--open')
      blockBody.classList.add('search__list--body-hidden')
      inputSearch.focus()
    } else if (state) {
      showInput.classList.remove('search__input--open')
      showList.classList.remove('search__list--open')
      blockBody.classList.remove('search__list--body-hidden')
    }
  }

  const handleListSearch = (e) => {
    const inputTargetValue = e.target.value
    setInputValue(inputTargetValue)
  }

  useEffect(() => {
    const filterInput = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    setListSearch(filterInput)
  }, [inputValue, products])

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
              click={() => handleOpenInputSearch(setOpenInputSearch(!openInputSearch))}
            />
          </div>
          <div className="search__input">
            <Input 
              classNameInputGroup="input__search-position"
              type="text"
              placeholder="o que você procura?"
              classNameInput="input__search"
              handleChange={(e) => handleListSearch(e)}
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
        <SearchList listSearch={listSearch} />
      </nav>
    </header>
    )
}

export default Header;
import React from 'react';
import { useHistory } from "react-router-dom";

// import '../../components/Search/Search.scss';
import Search from '../../components/Search';

export default function SearchList({inputValue, listSearch}) {
  let history = useHistory();

  const handleProductCode = (e, code) => {
    e.preventDefault()
    history.push('/produto/' + code);

    const showInput = document.querySelector('.search__input')
    const showList = document.querySelector('.search__list')
    const blockBody = document.querySelector('body')

    const inputSearch = document.querySelector('.input__search')
    showInput.classList.remove('search__input--open')
      showList.classList.remove('search__list--open')
      blockBody.classList.remove('search__list--body-hidden')
      inputSearch.value = '';
  }

  return (
    <>
      <ul className="search__list">
        <p className="container search__list-title">Resultados da busca</p>
        {
        inputValue === '' || (inputValue !== '' && listSearch.length === 0)
        ? <p className="container search__list-not-found">Digite o que você procura</p>
        : listSearch.map(product => <Search product={product} key={product.code_color} onClick={(e) => handleProductCode(e, product.code_color)}/>)
        }
      </ul>
    </>
  )
}

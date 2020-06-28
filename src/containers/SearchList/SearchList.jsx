import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Search from '../../components/Search';

import { closeSearch } from '../../actions/search';


export default function SearchList({inputValue, listSearch}) {
  let history = useHistory();
  const dispatch = useDispatch()

  const handleProductCode = (e, code) => {
    e.preventDefault()
    history.push('/produto/' + code);
    dispatch(closeSearch(true))
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

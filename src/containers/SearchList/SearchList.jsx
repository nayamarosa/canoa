import React from 'react';

// import '../../components/Search/Search.scss';
import Search from '../../components/Search';

export default function SearchList({inputValue, listSearch}) {
  return (
    <>
      <ul className="container search__list">
        <p className="search__list-title">Resultados da busca</p>
        {
        inputValue === '' || (inputValue !== '' && listSearch.length === 0)
        ? <p>Digite o que você procura</p>
        : listSearch.map(product => <Search product={product} key={product.code_color} />)
        }
      </ul>
    </>
  )
}

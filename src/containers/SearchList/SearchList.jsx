import React from 'react';

// import '../../components/Search/Search.scss';
import Search from '../../components/Search';

export default function SearchList({listSearch}) {
  console.log(SearchList)
  return (
    <ul className="container search__list">
      {listSearch.map(product => <Search product={product} key={product.code_color} />)} 
    </ul>
  )
}
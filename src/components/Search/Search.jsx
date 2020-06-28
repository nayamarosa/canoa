import React from 'react';
import { Link } from 'react-router-dom';

import './Search.scss';

import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';

export default function Search({product, onClick}) {
  return (
    <>
    <li className="search__item">
      <Link to='/' onClick={onClick}>
        <Banner 
          classNameBanner="banner__product banner__product--search"
          src={product.image}
          alt={product.name}
          classNameDiscount="banner__product--search-discount"
          percent={product.discount_percentage}
        />
        <ProductInfo 
          classNamePriceGroup="product-info__price-group--search"
          productName={product.name}
          oldPriceText="De"
          oldPriceValue={product.regular_price}
          priceValue={product.actual_price}
        />
      </Link>
    </li>
    </>
  )
}

//export default Search;
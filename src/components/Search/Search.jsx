import React from 'react';

import './Search.scss';

import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';

export default function Search(props) {
  return (
    <>
    <p className="search__title">Resultados da busca</p>

    <li className="search__item">
      <a href="/">
        <Banner 
          classNameBanner="banner__product banner__product--search"
          src={props.src}
          alt={props.alt}
          classNameDiscount="banner__product--search-discount"
          percent={props.percent}
        />
        <ProductInfo 
          classNamePriceGroup="product-info__price-group--search"
          productName={props.productName}
          oldPriceText={props.oldPriceText}
          oldPriceValue={props.oldPriceValue}
          priceValue={props.priceValue}
        />
      </a>
    </li>
    </>
  )
}
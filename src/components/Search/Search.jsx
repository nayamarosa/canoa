import React from 'react';

import './Search.scss';

import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';

export default function Search(props) {
  return (
    <ul className="container search__list">
    <p>Resultados da busca</p>
      <li className="search__item">
        <a href="/">
          <Banner 
            classNameBanner={props.classNameBanner}
            src={props.src}
            alt={props.alt}
            classNameDiscount={props.classNameDiscount}
            percent={props.percent}
          />
          <ProductInfo 
            classNamePriceGroup={props.classNamePriceGroup}
            productName={props.productName}
            oldPriceText={props.oldPriceText}
            oldPriceValue={props.oldPriceValue}
            priceValue={props.priceValue}
          />
        </a>
      </li>
    </ul>
  )
}
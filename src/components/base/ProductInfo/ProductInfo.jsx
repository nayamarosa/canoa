import React from 'react';

import './ProductInfo.scss';

export default function ProductInfo(props) {
  return (
    <div className="product-info__price">
      <p>
        {props.oldPriceText} <span className="product-info__price--old">{props.oldPriceValue}</span>
      </p>
      <p>
        Por <span className="product-info__price--new">{props.priceValue}</span>
      </p>
      <p>
        {props.installmentsText} <span>{props.installments}</span>
      </p>
    </div>
    )
  }
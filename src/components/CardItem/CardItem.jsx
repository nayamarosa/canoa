import React from 'react';
import { Link } from "react-router-dom";

import Image from '../base/Image';
import ProductInfo from '../ProductInfo';

const CardItem = ({product, onClick}) => {
  return (
  <>  
    <li className="card__item">
      <Link to="/" onClick={onClick}>
        <Image
          classNameImage="image__product image__product--card"
          src={product.image}
          alt={product.name}
          classNameDiscount="image__product--discount"
          percent={product.discount_percentage}
        />
        <ProductInfo
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

export default CardItem;
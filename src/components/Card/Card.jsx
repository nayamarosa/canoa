import React from 'react';

import './Card.scss';

import Button from '../base/Button';
import Banner from '../base/Banner';

import ProductInfo from '../ProductInfo';

const Card = ({product}) => {
  // const hideSamePrice = (regularPrice, actualPrice) => {
  //   if(regularPrice === actualPrice) {
  //     console.log('same');
  //     let teste = document.querySelector('.product-info__price');
  //     teste.style.display = "none";
  //     console.log(teste);
  //   }
  // }

  return (
  <>  
    <li className="card__item">
        <Banner
          classNameBanner="banner__product banner__product--card"
          src={product.image}
          alt={product.name}
          classNameDiscount="banner__product--discount"
          percent={product.discount_percentage}
        />
        <ProductInfo
          productName={product.name}
          oldPriceText="De"
          oldPriceValue={product.regular_price}
          priceValue={product.actual_price}
        />
        <div className="btn--center btn--card">
          <Button 
            type="submit"
            classNameBtn="btn__primary btn__primary-buy"
            text="Comprar"
          />
        </div>
    </li>
  </>
  )
}

export default Card;
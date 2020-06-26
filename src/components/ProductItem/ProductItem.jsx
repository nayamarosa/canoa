import React from 'react';
import { useHistory } from "react-router-dom";
import Banner from '../base/Banner';
import ProductInfo from '../ProductInfo';
import ProductSize from '../ProductSize';
import Button from '../base/Button';

export default function ProductItem({product}){
  let history = useHistory();

  const handleClickAddCart = (e) => {
    history.push('/');
  }

  return (
    <>
      <Banner
       classNameBanner="banner__product"
       src={product.image}
       alt={product.name}
       classNameDiscount="banner__product--discount banner__product--discount-bigger"
       percent={product.discount_percentage}
      />
      <ProductInfo
        classNamePriceGroup="product-info__price-group--bigger"
        classNamePrice="product-info__price--bigger"
        classNameOldPrice="product-info__price--bigger--old"
        classNameNewPrice="product-info__price--bigger--new"
        productName={product.name}
        oldPriceText="De"
        oldPriceValue={product.regular_price}
        priceValue={product.actual_price}
        installmentsText="Em até"
        installments={product.installments}
      />
      <ProductSize 
        classNameInput="input__size"
        type="radio"
        productSizes={product.sizes}
      />
      <Button 
      type="submit"
      classNameBtn="btn__secondary"
      text="Adicionar ao carrinho"
      icon="fas fa-shopping-cart"
      onClick={(e)=> handleClickAddCart(e)}
    />
    </>
  )
}
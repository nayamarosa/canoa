import React from 'react';

import Button from '../../components/base/Button';
import Banner from '../../components/base/Banner';

import NavFilter from '../../components/NavFilter';
import ProductInfo from '../../components/ProductInfo';
import ProductSize from '../../components/ProductSize';

import Product from '../ProductGroup';

function App() {
  return (
    <>
    <NavFilter />
    <Product>
      <Banner
        classNameBanner="banner__product"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Nome da roupa"
        classNameDiscount="banner__product--discount banner__product--discount-bigger"
        percent= "50%"
      />
      <ProductInfo
        classNamePriceGroup="product-info__price-group--bigger"
        classNamePrice="product-info__price--bigger"
        classNameOldPrice="product-info__price--bigger--old"
        classNameNewPrice="product-info__price--bigger--new"
        productName="Nome da Roupa"
        oldPriceText="De"
        oldPriceValue="R$ 200,00"
        priceValue="R$ 100,00"
        installmentsText="Em até"
        installments="3x de R$ 33,33"
      />
      <ProductSize 
        classNameInput="input__size"
        type="radio"
      />
    </Product>
    <Button 
      type="submit"
      classNameBtn="btn__secondary"
      text="Adicionar ao carrinho"
      icon="fas fa-shopping-cart"
    />
    </>
    );
  }
  
  export default App;
  
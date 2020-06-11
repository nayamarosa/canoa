import React from 'react';

import './App.scss';

import Banner from '../../components/base/Banner';
import ProductInfo from '../../components/base/ProductInfo';

import Header from '../../components/Header';
import NavFilter from '../../components/NavFilter';
import ProductSize from '../../components/ProductSize'

import Product from '../../containers/Product'

function App() {
  return (
    <>
    <Header />
    <NavFilter />
    <Product>
      <Banner
        className="banner__product"
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
        oldPriceValue="R$ 200"
        priceValue="R$ 100"
        installmentsText="Em até"
        installments="3x de R$ 33,33"
      />
      <ProductSize 
        classNameInput="input__size"
        type="radio"
      />
    </Product>
    </>
    );
  }
  
  export default App;
  
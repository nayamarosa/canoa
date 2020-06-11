import React from 'react';

import './App.scss';

import Banner from '../../components/base/Banner';
import ProductInfo from '../../components/base/ProductInfo';

import Header from '../../components/Header';
import NavFilter from '../../components/NavFilter';
import Card from '../../components/Card'

import Product from '../../containers/Product'

function App() {
  return (
    <>
    <Header />
    <NavFilter />
    <Card />
    <Product>
      <Banner
        className="container banner__product"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Nome da roupa"
        classNameDiscount="banner__product--discount banner__product--discount-bigger"
        percent= "50%"
      />
      <ProductInfo
        classNamePriceGroup="container product-info__price-group--bigger"
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
    </Product>
    </>
    );
  }
  
  export default App;
  
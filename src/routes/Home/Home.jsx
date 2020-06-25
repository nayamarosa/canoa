import React, { useContext } from 'react';

import { ProductsContext } from '../../containers/context'

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';
import CardList from '../../containers/CardsList';

export default function Home() {
  const products = useContext(ProductsContext)

  return (
    <>
      <Banner 
        classNameBanner="banner__hero"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter />
      <CardList products={products} />
    </>
  );
}

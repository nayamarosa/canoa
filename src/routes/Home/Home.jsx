import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { ProductsContext } from '../../containers/context';

import { fetchProducts } from '../../actions/catalog';

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch()
  // console.log(fetchProducts.payload)
  const products = useContext(ProductsContext)

  useEffect(() => {
    console.log(dispatch(fetchProducts()))
  })

  return (
    <>
      <Banner 
        classNameBanner="banner__hero"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter products={products} />
    </>
  );
}

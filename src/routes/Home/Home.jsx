import React, { useState, useEffect } from 'react';

import Banner from '../../components/base/Banner';
import NavFilter from '../../components/NavFilter';
import CardList from '../../containers/CardsList';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Banner 
        classNameBanner="banner__hero"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter products={products} />
      {/* <CardList products={products} /> */}
    </>
  );
}

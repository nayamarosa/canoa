import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from '../../components/Header';

// import Card from '../../components/Card';
import HeroBanner from '../../components/base/HeroBanner';
import CardList from '../CardsList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((res) => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <HeroBanner 
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <CardList products={products}>
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </CardList>
    </>
    );
  }
  
  export default App;
  
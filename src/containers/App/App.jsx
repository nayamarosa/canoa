import React, { useState, useEffect } from 'react';

import './App.scss';

import Header from '../../components/Header';
import NavFilter from '../../components/NavFilter';


// import Card from '../../components/Card';
import Banner from '../../components/base/Banner';
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
      <Banner 
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter />
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
  
import React from 'react';

import './App.scss';

import Header from '../../components/Header';
import Card from '../../components/Card';
import HeroBanner from '../../components/base/HeroBanner';


import CardList from '../CardsList';


function App() {
  return (
    <>
      <Header />
      <HeroBanner 
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </>
  );
}

export default App;

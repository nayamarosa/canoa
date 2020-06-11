import React from 'react';

import './App.scss';

import HeroBanner from '../../components/base/HeroBanner';

import Header from '../../components/Header';
import NavFilter from '../../components/NavFilter';
import Card from '../../components/Card';

import CardList from '../CardsList';


function App() {
  return (
    <>
      <Header />
      <HeroBanner 
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter />
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

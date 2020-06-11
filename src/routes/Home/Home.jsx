import React from 'react';

import HeroBanner from '../../components/base/HeroBanner';

import NavFilter from '../../components/NavFilter';
import Card from '../../components/Card';

import CardList from '../CardsList';

export default function Home() {
  return (
    <>
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

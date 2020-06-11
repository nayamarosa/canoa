import React from 'react';

import Banner from '../../components/base/Banner';

import NavFilter from '../../components/NavFilter';
import Card from '../../components/Card';

import CardList from '../CardsList';

export default function Home() {
  return (
    <>
      <Banner 
        className="banner__hero"
        src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg"
        alt="Hero Banner"
      />
      <NavFilter 
        selectedFilterName="Coleção nova"
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

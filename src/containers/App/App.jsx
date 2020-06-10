import React from 'react';

import './App.scss';

import Header from '../../components/Header';
import Card from '../../components/Card';

import CardList from '../CardsList';


function App() {
  return (
    <div className="container">
      <Header />
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  );
}

export default App;

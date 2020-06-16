import React from 'react';

import './App.scss';

import Header from '../../components/Header';
// import CardsList from '../CardsList';
// import Card from '../../components/Card'

import Product from '../../routes/Product';

function App() {
  return (
    <>
    <Header />

    <Product/>
    
    {/* <CardsList>
      <Card />
    </CardsList> */}
    </>
    );
  }
  
  export default App;
  
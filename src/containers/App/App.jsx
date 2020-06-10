import React from 'react';

import './App.scss';

import CardList from '../../containers/CardsList';
import Card from '../../components/Card';


function App() {
  return (
    <>
      <CardList>
        <Card />
      </CardList>
    </>
  );
}

export default App;

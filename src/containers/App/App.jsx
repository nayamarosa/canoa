import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Routes from '../../routes';
import { ProductsProvider } from '../context';
import './App.scss';

const App = () => (
  <>
    <ProductsProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ProductsProvider>
  </>
);

export default App;
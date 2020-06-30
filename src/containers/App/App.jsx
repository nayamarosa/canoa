import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Provider } from 'react-redux';
import store from '../../store';

import './App.scss';

import Header from '../../components/Header';

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  </>
);

export default App;

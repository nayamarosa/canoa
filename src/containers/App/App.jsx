import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../../components/Header';
import Routes from '../../routes';
import './App.scss';

import { store, persistor } from '../../store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
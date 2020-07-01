import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import { Provider } from 'react-redux';
import { store, persistor } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../../components/Header';


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
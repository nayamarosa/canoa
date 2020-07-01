import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from '../../routes';

import '../../styles/main.scss';

import Header from '../../containers/Header';

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
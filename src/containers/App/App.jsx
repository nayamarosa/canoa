import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import Header from '../../components/Header';
import Routes from '../../routes';
import './App.scss';


import store from '../../store';
import { Provider } from 'react-redux';

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

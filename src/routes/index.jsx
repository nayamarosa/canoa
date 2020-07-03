import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/produto/:productcode">
      <Product />
    </Route>

    <Route path="/carrinho-de-compras">
      <ShoppingCart />
    </Route>

    <Route path="/finalizacao-do-pedido">
      <Checkout />
    </Route>
  </Switch>
);

export default Routes;
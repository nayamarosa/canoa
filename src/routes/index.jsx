import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import ShoppingCart from './ShoppingCart';

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
  </Switch>
);

export default Routes;
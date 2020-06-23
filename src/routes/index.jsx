import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Product from './Product';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/produto">
      <Product />
    </Route>
  </Switch>
);

export default Routes;
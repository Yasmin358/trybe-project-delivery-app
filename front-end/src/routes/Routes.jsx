import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path="/customer/products" component={ CustomerProducts } />
      </Switch>
    </main>
  );
}

export default Routes;

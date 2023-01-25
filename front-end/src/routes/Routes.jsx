import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';

function Router() {
  return (
    <Routes>
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default Router;

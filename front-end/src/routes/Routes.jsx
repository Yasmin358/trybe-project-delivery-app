import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerProducts from '../pages/CustomerProducts';

function Router() {
  return (
    <main>
      <Routes>
        <Route exact path="/customer/products" element={ <CustomerProducts /> } />
      </Routes>
    </main>
  );
}

export default Router;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SellerOrders from '../pages/SellerOrders';
import Admin from '../pages/Admin';
import CustomerProducts from '../pages/CustomerProducts';
import CustomerCheckout from '../pages/CustomerCheckout';
import SellerDetails from '../pages/SellerDetails';
import Orders from '../pages/Orders';

function Router() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/seller/orders" element={ <SellerOrders /> } />
        <Route exact path="/seller/orders/:id" element={ <SellerDetails /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/customer/products" element={ <CustomerProducts /> } />
        <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </main>
  );
}

export default Router;

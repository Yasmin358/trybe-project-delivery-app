import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from '../pages/Admin';

function Router() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <p>teste</p> } />
        <Route exact path="/admin/manager" element={ <Admin /> } />
      </Routes>
    </main>
  );
}

export default Router;

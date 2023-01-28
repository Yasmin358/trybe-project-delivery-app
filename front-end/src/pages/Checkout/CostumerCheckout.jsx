import React from 'react';
import CartTable from '../../components/CartTable/CartTable';
import './checkout.css';
import Navbar from '../../components/Navbar';
import DetailsContainer from '../../components/DetailsContainer';
import CartProvider from '../../context/CartProvider';

function Checkout() {
  return (
    <CartProvider>
      <section className="body">
        <Navbar />
        <CartTable />
        <DetailsContainer />
      </section>
    </CartProvider>
  );
}

export default Checkout;

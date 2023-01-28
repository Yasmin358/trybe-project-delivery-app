import React, { useContext, useEffect, useState } from 'react';
import CartTable from '../../components/CartTable/CartTable';
import './checkout.css';
import Navbar from '../../components/Navbar';
import DetailsContainer from '../../components/DetailsContainer';
import CartProvider from '../../context/CartProvider';

function Checkout() {
  const { setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCart = JSON.parse(localStorage.getItem('cart'));
    setCart(getCart);
    setLoading(false);
  }, [loading, setCart, setLoading]);

  return (
    <CartProvider>
      <section className="body">
        <Navbar />
        { !loading && <CartTable /> }
        <DetailsContainer />
      </section>
    </CartProvider>
  );
}

export default Checkout;

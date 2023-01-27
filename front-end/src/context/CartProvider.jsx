import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const initialState = [];

  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('cart', cart);
  }, [cart]);

  const context = useMemo(() => ({
    cart, setCart,
  }), [cart]);

  return (
    <CartContext.Provider value={ context }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;

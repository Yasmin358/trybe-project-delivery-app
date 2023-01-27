import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

function ProductsProvider({ children }) {
  const initialState = [];

  const [products, setProducts] = useState(initialState);

  const context = useMemo(() => ({
    products, setProducts,
  }), [products]);

  if (!products) return null;

  return (
    <ProductsContext.Provider value={ context }>
      { children }
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;

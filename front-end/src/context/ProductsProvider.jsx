import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import ProductsContext from './ProductsContext';
// import deliveryApi from '../utils/fetch';

function ProductsProvider({ children }) {
  const initialState = [];

  const [products, setProducts] = useState(initialState);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/products').then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  // if (!products) return null;

  // const getProducts = async () => {
  //   axios.get('http://localhost:3001/products')
  //     .then((response) => {
  //       console.log(response.data);
  //       setProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // getProducts();

  // Início do teste
  // useEffect(() => {
  //   const getProducts = () => {
  //     axios.get('http://localhost:3001/products')
  //       .then((response) => response.data)
  //       .then((data) => {
  //         console.log(data);
  //         setProducts(data);
  //       })
  //       .catch(() => console.log('Não foi possível realizar o fetch'));
  //   };
  //   console.log(getProducts);
  //   getProducts();
  // }, [products]);
  // Fim do teste

  // const getProducts = () => {
  //   axios.get('http://localhost:3001/products')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // getProducts();

  // const getProducts = async () => deliveryApi('GET', 'products')
  //   .then(({ data: allProducts }) => setProducts(allProducts));

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

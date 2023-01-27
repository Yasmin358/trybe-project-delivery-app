import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';
import CartProvider from '../context/CartProvider';
// import drinksMock from '../mocks/drinks';

function CustomerProducts() {
  const { products, setProducts } = useContext(ProductsContext);

  // useEffect(() => {
  //   if (products.length === 0) {
  //     getProducts();
  //   }
  // }, [products, getProducts]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setProducts(response.data);
    });
  }, [setProducts]);

  console.log(products);

  return (
    <CartProvider>
      <div>
        <Navbar />
        {/* {drinksMock.map((drink) => (
          <ProductCard
            key={ drink.id }
            id={ drink.id }
            name={ drink.name }
            price={ drink.price }
            urlImage={ drink.urlImage }
          />
        ))} */}
        { console.log(products) }
        { products.map((drink) => (
          <ProductCard
            key={ drink.id }
            id={ drink.id }
            name={ drink.name }
            price={ drink.price }
            urlImage={ drink.urlImage }
          />
        ))}
        <ButtonCart />
      </div>
    </CartProvider>
  );
}

export default CustomerProducts;

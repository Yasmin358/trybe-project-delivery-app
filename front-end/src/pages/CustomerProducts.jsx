import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';
import CartProvider from '../context/CartProvider';
import '../styles/page-products.css';

function CustomerProducts() {
  const { products, setProducts } = useContext(ProductsContext);

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
        <section className="products-container">
          { products.map((drink) => (
            <ProductCard
              key={ drink.id }
              id={ drink.id }
              name={ drink.name }
              price={ drink.price }
              urlImage={ drink.urlImage }
              itenCart={ false }
            />
          ))}
        </section>
        <ButtonCart />
      </div>
    </CartProvider>
  );
}

export default CustomerProducts;

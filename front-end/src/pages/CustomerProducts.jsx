import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductsContext from '../context/ProductsContext';
import CartProvider from '../context/CartProvider';
import '../styles/products.css';

function CustomerProducts() {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    axios.get('https://delivery-app-production.up.railway.app/products').then((response) => {
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
            />
          ))}
        </section>
        <ButtonCart />
      </div>
    </CartProvider>
  );
}

export default CustomerProducts;

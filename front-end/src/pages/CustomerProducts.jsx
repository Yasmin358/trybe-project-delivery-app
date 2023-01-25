import React from 'react';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartProvider from '../context/CartProvider';
import drinksMock from '../mocks/drinks';

function CustomerProducts() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        {drinksMock.map((drink) => (
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

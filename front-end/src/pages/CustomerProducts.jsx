import React from 'react';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import drinksMock from '../mocks/drinks';

function CustomerProducts() {
  return (
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
      {/* <ProductCard /> */}
      <ButtonCart />
    </div>
  );
}

export default CustomerProducts;

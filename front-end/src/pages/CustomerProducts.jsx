import React from 'react';
import ButtonCart from '../components/ButtonCart';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  return (
    <div>
      <Navbar />
      <ProductCard />
      <ButtonCart />
    </div>
  );
}

export default CustomerProducts;

import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function ButtonCart() {
  const { cart } = useContext(CartContext);
  const productCart = [...cart];

  const totalPrice = () => {
    const productCartSum = productCart.reduce(
      (acc, curr) => Number((acc + curr.value).toFixed(2)),
      0,
    );
    return productCartSum.toFixed(2).toString().replace('.', ',');
  };

  return (
    <div>
      <button data-testid="customer_products__button-cart" type="button">
        <p data-testid="customer_products__checkout-bottom-value">
          {/* {`Ver carrinho: R$${totalPrice()}`} */}
          {/* Ver carrinho: R$ */}
          { totalPrice() }
        </p>
      </button>
    </div>
  );
}

export default ButtonCart;

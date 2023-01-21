import React from 'react';

function ButtonCart(totalPrice) {
  return (
    <div>
      <button data-testid="customer_products__button-cart" type="button">
        <p data-testid="customer_products__checkout-bottom-value">
          {`Ver carrinho: R$${totalPrice}`}
        </p>
      </button>
    </div>
  );
}

export default ButtonCart;

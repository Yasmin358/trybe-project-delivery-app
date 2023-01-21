import React from 'react';

function ProductCard(id) {
  return (
    <section>
      <p data-testid={ `customer_products__element-card-title-${id}` }>Name</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>Price</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src="../images/rockGlass.svg"
        alt="Bebida"
      />
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="inputCardQuantity"
          id="inputCardQuantity"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
  case 'increment':
    return { count: state.count + 1 };
  case 'decrement':
    if (state.count === 0) return { count: 0 };
    return { count: state.count - 1 };
  default:
    throw new Error('Unknown action');
  }
}

function ProductCard(id) {
  const [state, dispatch] = useReducer(countReducer, initialState);
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
          onClick={ () => dispatch({ type: 'decrement' }) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="inputCardQuantity"
          id="inputCardQuantity"
          value={ state.count }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ () => dispatch({ type: 'increment' }) }
        >
          +
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

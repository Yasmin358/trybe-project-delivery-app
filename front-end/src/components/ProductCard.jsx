import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';

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

function ProductCard(props) {
  const { id, name, price, urlImage } = props;
  const [state, dispatch] = useReducer(countReducer, initialState);
  const context = useContext(CartContext);
  const { cart, setCart } = context;

  const addToCart = (idx) => {
    const productCart = [...cart];
    const productItem = productCart.find((product) => product.id === idx);
    const unitPrice = parseFloat(price);
    if (!productItem) {
      productCart.push({ id: idx, qty: 1, value: parseFloat(price) });
    } else {
      productItem.qty += 1;
      productItem.value += unitPrice;
    }
    setCart(productCart);
    console.log(productCart);
    return productCart;
  };

  return (
    <section>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {`R$${price}`}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        width="250px"
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
          onChange={ ({ target: { value } }) => value }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          value={ id }
          onClick={ ({ currentTarget }) => {
            dispatch({ type: 'increment' });
            addToCart(currentTarget.value);
          } }
        >
          +
        </button>

        {/* <button
          type="button"
          value={ id }
          onClick={ ({ currentTarget }) => addToCart(currentTarget.value) }
        >
          Teste
        </button> */}

      </div>
    </section>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductCard;

import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';
import countReducer from '../utils/countReducer';

function ProductCard(props) {
  const { id, name, price, urlImage } = props;
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(countReducer, initialState);
  const { cart, setCart } = useContext(CartContext);
  const productCart = [...cart];
  const productItem = productCart.find((product) => product.id === id);
  const productCartRemovedItem = productCart.filter((product) => product.id !== id);
  const unitPrice = parseFloat(price);

  const addToCart = () => {
    if (!productItem) {
      productCart.push({ id, name, qty: 1, value: parseFloat(price) });
    } else {
      productItem.qty += 1;
      productItem.value += unitPrice;
    }
    setCart(productCart);
    console.log(productCart);
    return productCart;
  };

  const removeFromCart = () => {
    if (productItem && productItem.qty === 1) {
      setCart(productCartRemovedItem);
      console.log(productCartRemovedItem);
      return productCartRemovedItem;
    }

    if (productItem && productItem.qty > 0) {
      productItem.qty -= 1;
      productItem.value -= unitPrice;
      setCart(productCart);
      console.log(productCart);
      return productCart;
    }
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
          onClick={ () => {
            dispatch({ type: 'decrement' });
            removeFromCart();
          } }
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
          onClick={ () => {
            dispatch({ type: 'increment' });
            addToCart();
          } }
        >
          +
        </button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductCard;

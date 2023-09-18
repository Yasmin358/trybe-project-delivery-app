import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';
import '../styles/productCard.css';

function ProductCard(props) {
  const { id, name, price, urlImage } = props;
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  const productCart = [...cart];
  const productItem = productCart.find((product) => product.id === id);
  const productCartRemovedItem = productCart.filter(
    (product) => product.id !== id,
  );
  const unitPrice = parseFloat(price);

  const addToCart = (itemQty, increment) => {
    if (!productItem) {
      productCart.push({ id, name, qty: itemQty, value: (parseFloat(price) * itemQty) });
    } else {
      productItem.qty = increment === 'increment' ? productItem.qty + itemQty : itemQty;
      productItem.value = increment === 'increment'
        ? productItem.value + unitPrice : (itemQty * unitPrice);
    }
    setCart(productCart);
    return productCart;
  };

  const removeFromCart = (itemQty, decrement) => {
    if (productItem && productItem.qty === 1) {
      setCart(productCartRemovedItem);
      return productCartRemovedItem;
    }

    if (productItem && productItem.qty > 0) {
      productItem.qty = decrement === 'decrement' ? productItem.qty - itemQty : itemQty;
      productItem.value = decrement === 'decrement'
        ? productItem.value - unitPrice : (itemQty * unitPrice);
      setCart(productCart);
      return productCart;
    }
  };

  return (
    <section className="card-container">
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toString().replace('.', ',')}
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
            if (count > 0) {
              setCount(count - 1);
              removeFromCart(1, 'decrement');
            }
          } }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="inputCardQuantity"
          id="inputCardQuantity"
          min="0"
          value={ (count).toString().replace(/ˆ0+/, '') }
          onBlur={ () => setCount(productItem ? productItem.qty : '0') }
          onClick={ () => setCount('') }
          onChange={ ({ target: { value } }) => {
            setCount(Number(value));
            if (Number(value) <= 0) return removeFromCart(Number(value), 'decrement');
            return addToCart(Number(value), '');
          } }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ () => {
            setCount(Number(count) + 1);
            addToCart(1, 'increment');
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

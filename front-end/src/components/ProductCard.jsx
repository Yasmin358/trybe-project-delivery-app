import React from 'react';
import PropTypes from 'prop-types';
import '../styles/products.css';
import CountContainer from './CountContainer';
import trash from '../images/trash.png';

function ProductCard(props) {
  const { id, name, price, urlImage, itenCart } = props;

  return (
    <article className={ itenCart ? 'iten-cart' : 'card-product' }>
      <figure className="image-container">
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="Bebida"
        />
      </figure>
      <p
        className="description"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </p>

      <div className="price-container">
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          R$
          {price.toString().replace('.', ',')}
        </p>
        <CountContainer
          id={ id }
          name={ name }
          price={ price }
          urlImage={ urlImage }
          itenCart={ itenCart }
        />
      </div>
      {
        itenCart ? (
          <button className="buttonExcluir" type="button">
            <img src={ trash } alt="excluir" />
          </button>) : ''
      }
    </article>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductCard;

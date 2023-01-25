import React from 'react';
import { string, shape, number } from 'prop-types';

function Order({ order, status, date, price, address, delivery }) {
  return (
    <div>
      <div>
        <p data-testid={ `${delivery}-${order.id}` }>{ order.deliveryNumber }</p>
      </div>
      <p data-testid={ `${status}-${order.id}` }>{ order.status }</p>
      <p data-testid={ `${date}-${order.id}` }>{ order.saleDate }</p>
      <p data-testid={ `${price}-${order.id}` }>{ order.totalPrice }</p>
      {
        address && (
          <p data-testid={ `${address}-${order.id}` }>{ order.deliveryAddress }</p>
        )
      }
    </div>
  );
}

Order.propTypes = {
  status: string.isRequired,
  date: string.isRequired,
  price: string.isRequired,
  delivery: string.isRequired,
  address: string,
  order: shape({
    id: number,
    deliveryNumber: string,
    status: string,
    saleDate: string,
    totalPrice: number,
    deliveryAddress: string,
  }).isRequired,
};

Order.defaultProps = {
  address: '',
};

export default Order;

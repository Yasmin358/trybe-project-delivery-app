import React from 'react';
import { string, shape, number } from 'prop-types';

const TEN = 10;

function OrderCard({ order, status, date, price, address, delivery }) {
  const formatarData = (param, param2) => {
    const result = Number(param) + param2;
    return result < TEN ? `0${result}` : result;
  };

  const montarData = (newDate) => {
    const novaData = new Date(newDate);
    const dia = novaData.getUTCDate();
    const mes = novaData.getUTCMonth();
    const ano = novaData.getUTCFullYear();
    return `${formatarData(dia, 0)}/${formatarData(mes, 1)}/${ano}`;
  };

  return (
    <>
      <div>
        <p data-testid={ `${delivery}-${order.id}` }>{ order.id }</p>
      </div>
      <p data-testid={ `${status}-${order.id}` }>{ order.status }</p>
      <p data-testid={ `${date}-${order.id}` }>{ montarData(order.saleDate) }</p>
      <p data-testid={ `${price}-${order.id}` }>{ order.totalPrice.replace('.', ',') }</p>
      {
        address && (
          <p data-testid={ `${address}-${order.id}` }>
            { `${order.deliveryAddress}, ${order.deliveryNumber}` }
          </p>
        )
      }
    </>
  );
}

OrderCard.propTypes = {
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

OrderCard.defaultProps = {
  address: '',
};

export default OrderCard;

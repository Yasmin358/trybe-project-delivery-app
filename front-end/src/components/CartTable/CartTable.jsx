import React from 'react';
import './CartTable.css';

function CartTable() {
  const array = [
    {
      id: 1,
      productId: 12,
      name: 'Cerveja Stella 250ml',
      quantity: 3,
      unityPrice: 3.50,
      subTotal: 10.50,
    },
    {
      id: 2,
      productId: 5,
      name: 'Cerveja Skol Latão 450ml',
      quantity: 4,
      unityPrice: 4.10,
      subTotal: 16.40,
    },
    {
      id: 3,
      productId: 10,
      name: 'Salgadinho Torcida Churrasco',
      quantity: 1,
      unityPrice: 1.56,
      subTotal: 1.56,
    },
  ];

  return (
    <table className="cartTable">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {
          array.map((product) => (
            <tr key={ product.id }>
              <td
                data-testid={ `customer_checkout__
                element-order-table-item-number-${product.id}` }
              >
                {product.id}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-name-${product.id}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-quantity-${product.id}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-unit-price-${product.id}` }
              >
                {`R$ ${product.unityPrice.toFixed(2).replace(/\./, ',')}`}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-sub-total-${product.id}` }
              >
                {`R$ ${product.subTotal.toFixed(2).replace(/\./, ',')}`}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-remove-${product.id}` }
              >
                <button type="button">Remover</button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
}
export default CartTable;

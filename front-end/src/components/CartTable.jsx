import React from 'react';

function CartTable() {
  return (
    <table>
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
        <tr>
          <td data-testid="customer_checkout__element-order-table-item-number-<index>">
            1
          </td>
          <td data-testid="customer_checkout__element-order-table-name-<index>">
            Cerveja Stella 250ml
          </td>
          <td data-testid="customer_checkout__element-order-table-quantity-<index>">
            3
          </td>
          <td data-testid="customer_checkout__element-order-table-unit-price-<index>">
            R$ 3,50
          </td>
          <td data-testid="customer_checkout__element-order-table-sub-total-<index>">
            R$ 10,50
          </td>
          <td data-testid="customer_checkout__element-order-table-remove-<index>">
            <button type="button">Remover</button>
          </td>
        </tr>

      </tbody>

    </table>
  );
}
export default CartTable;

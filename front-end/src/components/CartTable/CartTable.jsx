import React from 'react';
import './CartTable.css';

function CartTable() {
  const { cart } = useContext(CartContext);
  const productCart = [...cart];

  const removeItem = (id) => {
    const productCartRemovedItem = productCart.filter((product) => product.id !== id);
    setCart(productCartRemovedItem);
  };

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
          productCart.map((product) => (
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
                {product.qty}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-unit-price-${product.id}` }
              >
                {`R$ ${(product.value / 2).toFixed(2).replace(/\./, ',')}`}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-sub-total-${product.id}` }
              >
                {`R$ ${product.value.toFixed(2).replace(/\./, ',')}`}
              </td>
              <td
                data-testid={ `customer_checkout__
                element-order-table-remove-${product.id}` }
              >
                <button
                  type="button"
                  onClick={ () => removeItem(product.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
}
export default CartTable;

import React, { useContext, useState, useEffect } from 'react';
import '../styles/cartTable.css';
import CartContext from '../context/CartContext';

function CartTable() {
  const { cart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCart = JSON.parse(localStorage.getItem('cart'));
    setCart(getCart);
    setLoading(false);
  }, [loading, setCart, setLoading]);

  function totalPrice() {
    const productCartSum = cart.reduce(
      (acc, curr) => Number((acc + curr.value).toFixed(2)),
      0,
    );
    return productCartSum.toFixed(2).toString().replace('.', ',');
  }

  const removeItem = (id) => {
    setLoading(true);
    const productCartRemovedItem = cart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(productCartRemovedItem));
    setCart(productCartRemovedItem);
    setLoading(false);
  };

  return (
    <div className="cartContainer">
      <h2>Finalizar Pedido</h2>
      {
        !loading
    && (
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
            cart.map((product, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.qty}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {`R$ ${(product.value / product.qty).toFixed(2).replace(/\./, ',')}`}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$ ${product.value.toFixed(2).replace(/\./, ',')}`}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
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
      </table>)
      }
      <p>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { !loading && `${totalPrice()}` }
        </span>
      </p>
    </div>
  );
}
export default CartTable;

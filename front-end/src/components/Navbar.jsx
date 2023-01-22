import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Navbar() {
  const context = useContext(UserContext);
  const { user } = context;
  return (
    <nav>
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          { user }
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          Sair
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

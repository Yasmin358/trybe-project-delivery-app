import React from 'react';

function Navbar() {
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
          John Doe
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          Sair
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Navbar() {
  const { user } = useContext(UserContext);
  const userName = [...user];
  const logOut = () => localStorage.removeItem('user');

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
          { userName }
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <Link onClick={ () => logOut() } to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

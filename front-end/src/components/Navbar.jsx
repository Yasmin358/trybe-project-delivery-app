import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import '../styles/navbar.css';

function Navbar() {
  const { user, getUser } = useContext(UserContext);
  const userName = [...user];
  const logOut = () => localStorage.removeItem('user');

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <nav className="nav-container">
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
        <li>
          <Link
            data-testid="customer_products__element-navbar-link-orders"
            to="/customer/orders"
          >
            Meus Pedidos
          </Link>
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          {userName}
        </li>
        <li>
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logOut() }
            to="/login"
          >
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

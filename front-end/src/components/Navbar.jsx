import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import '../styles/navbar.css';
import userIcon from '../images/person.png';
import cartIcon from '../images/bag.png';
import ProductCard from './ProductCard';
import CartContext from '../context/CartContext';

function Navbar() {
  const { user, getUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isCartExpanded, setIsCartExpanded] = useState(false);
  const userName = [...user];
  const logOut = () => localStorage.removeItem('user');

  useEffect(() => {
    getUser();
  }, [getUser]);

  const expandeCart = () => {
    setIsCartExpanded(!isCartExpanded);
  };

  const getCartList = () => {
    const list = [...cart];
    return list;
  };

  return (
    <header className="header-container">
      <nav className="navegation-left">
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="menu-link"
        >
          HOME
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          className="menu-link"
        >
          MEUS PEDIDOS
        </Link>
      </nav>
      <nav className="navegation-right">
        <button
          type="button"
          className="cart-btn"
          onClick={ expandeCart }
        >
          <img src={ cartIcon } alt="cart-icon" />
        </button>
        <button
          type="button"
          className="user-btn"
          onClick={ () => { setIsNavExpanded(!isNavExpanded); } }
        >
          <img src={ userIcon } alt="user-icon" />
        </button>
      </nav>
      <ul
        className={
          isCartExpanded ? 'cart-container expanded' : 'cart-container'
        }
      >

        { getCartList().length === 0 ? (<li>Carinho Vazio</li>)
          : getCartList().map((drink) => (
            <ProductCard
              key={ drink.id }
              id={ drink.id }
              name={ drink.name }
              price={ drink.value }
              urlImage={ drink.urlImage }
              itenCart
            />))}
      </ul>
      <ul
        className={
          isNavExpanded ? 'menu-container expanded' : 'menu-container'
        }
      >
        <li className="user-name">{userName}</li>
        <li className="sair-btn">
          <Link
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logOut() }
            to="/login"
          >
            Sair
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;

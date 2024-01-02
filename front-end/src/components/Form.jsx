import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Form() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const redirectObj = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  const validFields = () => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validEmail = emailPattern.test(input.email);
    const FIVE = 5;

    return validEmail && input.password.length > FIVE;
  };

  const handleInput = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const redirectToRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://delivery-app-production.up.railway.app/', input)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        const stringfyData = JSON.stringify(data);
        localStorage.setItem('user', stringfyData);
        setUser(data.name);
        navigate(redirectObj[data.role]);
      })
      .catch(() => setInvalidLogin(true));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      navigate(redirectObj[data.role]);
    }
  });

  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <label htmlFor="email" className="label-login">
        <span className="text">E-mail</span>
        <input
          name="email"
          type="text"
          onChange={ handleInput }
          data-testid="common_login__input-email"
          className="input-login"
        />
      </label>
      <label htmlFor="password" className="label-login">
        <span className="text">Senha</span>
        <input
          name="password"
          type="password"
          onChange={ handleInput }
          data-testid="common_login__input-password"
          className="input-login"
        />
      </label>
      <button
        type="submit"
        name="login"
        data-testid="common_login__button-login"
        disabled={ !validFields() }
        className="primary-button"
      >
        ENTRAR
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
        onClick={ redirectToRegister }
        className="secundary-button"
      >
        CADASTRO
      </button>
      {invalidLogin && (
        <h4 data-testid="common_login__element-invalid-email">Dados inválidos</h4>
      )}
    </form>
  );
}

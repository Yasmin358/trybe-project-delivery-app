import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';

export default function RegisterForm() {
  const [input, setInput] = useState({ email: '', password: '', name: '' });
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const validFields = () => {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validEmail = emailPattern.test(input.email);
    const FIVE = 5;
    const ELEVEN = 11;

    return validEmail && input.password.length > FIVE && input.name.length > ELEVEN;
  };

  const handleInput = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { ...input, role: 'customer' };

    axios.post('/register/', userData)
      .then((response) => response.data)
      .then((data) => {
        const stringfyData = JSON.stringify(data);
        localStorage.setItem('user', stringfyData);
        setUser(data.name);
        navigate('/customer/products');
      })
      .catch(() => setInvalid(true));
  };

  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <label htmlFor="name" className="label-register">
        <span className="text">Nome</span>
        <input
          type="text"
          name="name"
          data-testid="common_register__input-name"
          onChange={ handleInput }
          className="input-register"
        />
      </label>
      <label htmlFor="email" className="label-register">
        <span className="text">Email</span>
        <input
          type="email"
          name="email"
          data-testid="common_register__input-email"
          onChange={ handleInput }
          className="input-register"
        />
      </label>
      <label htmlFor="password" className="label-register">
        <span className="text">Senha</span>
        <input
          type="password"
          name="password"
          data-testid="common_register__input-password"
          onChange={ handleInput }
          className="input-register"
        />
      </label>
      <button
        type="submit"
        data-testid="common_register__button-register"
        disabled={ !validFields() }
        className="primary-button"
      >
        CADASTRAR
      </button>
      {
        invalid
          && (
            <p data-testid="common_register__element-invalid_register">
              Usuário já existente
            </p>
          )
      }
    </form>
  );
}

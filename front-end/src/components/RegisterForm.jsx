import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterForm() {
  const [input, setInput] = useState({ email: '', password: '', name: '' });
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

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

    axios.post('http://localhost:3001/register/', input)
      .then((response) => response.data)
      .then((data) => {
        const stringfyData = JSON.stringify(data);
        localStorage.setItem('user', stringfyData);
        navigate('/customer/products');
      })
      .catch(() => setInvalid(true));
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
            onChange={ handleInput }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ !validFields() }
        >
          CADASTRAR
        </button>
      </form>
      {
        invalid
          && (
            <p data-testid="common_register__element-invalid_register">
              Usuário já existente
            </p>
          )
      }
    </>
  );
}

import React from 'react';
import '../styles/login-register.css';
import Form from '../components/Form';
import logo from '../images/Logo.png';

export default function Login() {
  return (
    <div className="body-login">
      <section className="left-container">
        <figure className="logo-container">
          <img src={ logo } alt="logo-site" />
        </figure>
      </section>
      <section className="right-container">
        <section className="login-container">
          <h1 className="title">Olá!</h1>
          <h2 className="subtitle">Digite seus dados para continuar</h2>
          <Form />
        </section>
      </section>
    </div>
  );
}

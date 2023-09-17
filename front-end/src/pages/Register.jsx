import React from 'react';
import RegisterForm from '../components/RegisterForm';
import logo from '../images/Logo.png';
import '../styles/login-register.css';

export default function Register() {
  return (
    <div className="body-register">
      <section className="right-container">
        <section className="register-container">
          <h1 className="title">Criar Conta</h1>
          <RegisterForm />
        </section>
      </section>
      <section className="left-container">
        <figure className="logo-container">
          <img src={ logo } alt="logo-site" />
        </figure>
      </section>
    </div>
  );
}

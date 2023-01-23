import React from 'react';
import CartTable from '../components/CartTable';
// import '../styles/checkout.css';
// import Navbar from '../components/Navbar.jsx';

function Checkout() {
  return (
    <section className="body">
      { // <Navbar />
      }
      <div className="cartContainer">
        <h2>Finalizar Pedido</h2>
        <CartTable />
      </div>
      <div className="detailsContainer">
        <h2>Detalhes e Endereço para Entrega</h2>
        <form>
          <label htmlFor="selectSeller">
            P. Vendedora Responsável
            <select
              data-testid="customer_checkout__select-seller"
              id="selectSeller"
            >
              {options}
            </select>
          </label>
          <label htmlFor="inputAddress">
            Endereço
            <input
              type="text"
              data-testid="customer_checkout__input-address"
              id="inputAddress"
            />
          </label>
          <label htmlFor="inputAddressNumber">
            Numero
            <input
              type="number"
              data-testid="customer_checkout__input-address-number"
              id="inputAddressNumber"
            />
          </label>
        </form>
      </div>
    </section>

  );
}

export default Checkout;

import React, { useState } from 'react';

function DetailsContainer() {
  const [address, setAddress] = useState('');
  const [seller, setSeller] = useState('');
  const [number, setNumber] = useState(0);

  const handleChangeSeller = ({ target }) => {
    const { value } = target;
    setSeller(value);
  };

  const handleChangeAddress = ({ target }) => {
    const { value } = target;
    setAddress(value);
  };

  const handleChangeNumber = ({ target }) => {
    const { value } = target;
    setNumber(value);
  };

  return (
    <div className="detailsContainer">
      <h2>Detalhes e Endereço para Entrega</h2>
      <label htmlFor="selectSeller">
        P. Vendedora Responsável
        <select
          data-testid="customer_checkout__select-seller"
          id="selectSeller"
          value={ seller }
          onChange={ handleChangeSeller }
        >
          <option>Amanda</option>
          <option>Dandara</option>
          <option>Elena</option>
        </select>
      </label>
      <label htmlFor="inputAddress">
        Endereço
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          id="inputAddress"
          value={ address }
          onChange={ handleChangeAddress }
        />
      </label>
      <label htmlFor="inputAddressNumber">
        Numero
        <input
          type="number"
          data-testid="customer_checkout__input-address-number"
          id="inputAddressNumber"
          value={ number }
          onChange={ handleChangeNumber }
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </div>

  );
}

export default DetailsContainer;

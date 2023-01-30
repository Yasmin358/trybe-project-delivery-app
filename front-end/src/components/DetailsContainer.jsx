import React, { useState, useEffect } from 'react';
import CartContext from '../context/CartContext';

function DetailsContainer() {
  const [address, setAddress] = useState('');
  const [seller, setSeller] = useState('');
  const [number, setNumber] = useState(0);
  const [sellers, setsellers] = useState([]);

  const { cart } = useContext(CartContext);

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

  const handleClick = () => {
    axios.post('http://localhost:3001/sales/', { address, seller, number, cart })
      .then((response) => response.data)
      .then((data) => {
        navigate(redirectObj[data.id]);
      })
      .catch(() => console.log('deu ruim'));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/seller')
      .then((response) => response.data)
      .then((data) => {
        setsellers(data);
      })
      .catch(() => setsellers([]));
  });

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
          {
            sellers.map(({ name, id }, i) => (
              <option value={ id } key={ i }>{ name }</option>
            ))
          }
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
        onClick={ handleClick }
      >
        Finalizar Pedido
      </button>
    </div>

  );
}

export default DetailsContainer;

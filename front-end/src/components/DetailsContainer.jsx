import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';

function DetailsContainer() {
  const [address, setAddress] = useState('');
  const [seller, setSeller] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setsellers] = useState([]);
  const navigate = useNavigate();

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
    const { token } = JSON.parse(localStorage.getItem('user'));

    axios.post(
      'http://localhost:3001/sales/',
      { address, number, seller, cart },
      { headers: { authorization: token } },
    )
      .then((response) => response.data)
      .then((data) => {
        navigate(`/customer/orders/${[data.id]}`);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/seller')
      .then((response) => response.data)
      .then((data) => {
        setsellers(data);
        setSeller(data[0].id);
      })
      .catch(() => setsellers([]));
  }, []);

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
          type="text"
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

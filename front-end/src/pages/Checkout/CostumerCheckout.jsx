import React from 'react';
import CartTable from '../../components/CartTable/CartTable';
import './checkout.css';
// import Navbar from '../components/Navbar.jsx';

function Checkout() {
  const [address, setAddress] = useState('');
  const [seller, setSeller] = useState('');
  const [number, setNumber] = useState(0);
  const { cart } = useContext(CartContext);
  const productCart = [...cart];

  const totalPrice = () => {
    const productCartSum = productCart.reduce(
      (acc, curr) => Number((acc + curr.value).toFixed(2)),
      0,
    );
    return productCartSum.toFixed(2).toString().replace('.', ',');
  };

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
    <section className="body">
      { // <Navbar />
      }
      <div className="cartContainer">
        <h2>Finalizar Pedido</h2>
        <CartTable />
        <span>{ `Total: R$ ${totalPrice}` }</span>
      </div>
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
        <button type="button">
          Finalizar Pedido
        </button>
      </div>
    </section>

  );
}

export default Checkout;

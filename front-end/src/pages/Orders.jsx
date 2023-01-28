import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    await axios.get('http://localhost:3001/sales/customer', { id })
      .then((result) => result.data)
      .then((data) => setOrders([...data]))
      .catch((err) => {
        setOrders([]);
        console.log(err);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <NavBar />
      {orders.length
        ? orders.map((order, numb) => (
          <Link
            key={ numb }
            to={ `/customer/orders/${order.id}` }
          >
            <OrderCard
              order={ order }
              status="customer_orders__element-delivery-status"
              date="customer_orders__element-order-date"
              price="customer_orders__element-card-price"
              delivery="customer_orders__element-order-id"
            />
          </Link>
        ))
        : <h1 className={ styles.title }>Não perca tempo, faça seu pedido!</h1>}

    </div>
  );
}

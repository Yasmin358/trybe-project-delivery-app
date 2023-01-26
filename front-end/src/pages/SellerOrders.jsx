import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Order from '../components/Order';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getList = () => {
      const { token } = JSON.parse(localStorage.getItem('user'));

      axios.post('http://localhost:3001/sales/orders/', { token })
        .then((response) => response.data)
        .then((data) => {
          setSales(data);
        })
        .catch(() => console.log('deu errado'));
    };
    getList();
    console.log(JSON.parse(localStorage.getItem('user')).name);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {
          sales.map((sale, i) => (
            <Order
              key={ i }
              order={ sale }
              status="seller_orders__element-delivery-status"
              date="seller_orders__element-order-date"
              price="seller_orders__element-card-price"
              address="seller_orders__element-card-address"
              delivery="seller_orders__element-order-id"
            />
          ))
        }
      </div>
    </>
  );
}

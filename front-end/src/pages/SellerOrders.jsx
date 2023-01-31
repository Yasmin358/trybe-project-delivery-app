import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getList = () => {
      const { token } = JSON.parse(localStorage.getItem('user'));

      axios.post('http://localhost:3001/sales/seller/', { token })
        .then((response) => response.data)
        .then((data) => {
          setSales(data);
        })
        .catch((err) => {
          setSales([]);
          console.log(err);
        });
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
            <Link
              key={ i }
              to={ `/seller/orders/${sale.id}` }
            >
              <OrderCard
                order={ sale }
                status="seller_orders__element-delivery-status"
                date="seller_orders__element-order-date"
                price="seller_orders__element-card-price"
                address="seller_orders__element-card-address"
                delivery="seller_orders__element-order-id"
              />
            </Link>
          ))
        }
      </div>
    </>
  );
}

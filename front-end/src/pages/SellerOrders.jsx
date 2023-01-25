import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getList = () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      console.log(token);

      axios.post('http://localhost:3001/sales/orders/', { token })
        .then((response) => response.data)
        .then((data) => {
          setSales(data);
          console.log(data, 'sellerOrd');
        })
        .catch(() => console.log('deu errado'));
    };
    getList();
  }, []);

  return (
    <div>{ sales || 'SellerOrders' }</div>
  );
}

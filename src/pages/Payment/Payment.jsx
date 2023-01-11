import React from 'react';
import { useEffect, useState } from 'react';
import PaymentAside from './component/PaymentAside/PaymentAside';
import PaymentInfo from './component/PaymentInfo/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.56:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.data);
        // console.log(data.data.cartList);
        // console.log(data.data.cartList[0]);
        // console.log(data.data.cartList[0].koreanName);
        // setProduct(data.data.cartList[0]);
        setProduct(data.data.cartList);
      });
  }, []);
  // console.log(product);

  return (
    <div className="payment-wrap">
      <div className="payment-content">
        <div className="payment-aside-wrap">
          <PaymentAside />
        </div>
        <div className="payment-info-wrap">
          <PaymentInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default Payment;

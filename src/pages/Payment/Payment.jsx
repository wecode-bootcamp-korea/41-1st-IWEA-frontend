import React from 'react';
import { useEffect, useState } from 'react';
import PaymentAside from './component/PaymentAside/PaymentAside';
import PaymentInfo from './component/PaymentInfo/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [product, setProduct] = useState({});
  const [cancel, setCancel] = useState();

  // useEffect(() => {
  //   return window.localStorage.setItem(
  //     'TOKEN',
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImlhdCI6MTY3MzM5NDk5MH0.nejufPzJzN2PzV5ToZGIXHC9fP21skEhEk7Lp4ZwgFU'
  //   );
  // }, []);

  useEffect(() => {
    fetch('http://10.58.52.170:3000/orders', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProduct(data.data);
      });
  }, []);
  console.log(product);

  useEffect(() => {
    fetch('http://10.58.52.170:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        orderId: orderId,
        totalprice: totalprice,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCancel(data.data);
      });
  }, []);

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

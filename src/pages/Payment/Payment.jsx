import React from 'react';
import { useEffect, useState } from 'react';
import PaymentAside from './component/PaymentAside/PaymentAside';
import PaymentInfo from './component/PaymentInfo/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.56:3000/userInfo', {
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

  return (
    <div className="payment-wrap">
      <div className="payment-content">
        <div className="payment-aside-wrap">
          <PaymentAside />
        </div>
        <div className="payment-info-wrap">
          <PaymentInfo
            // productName={product.name}
            // productPoints={product.points}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

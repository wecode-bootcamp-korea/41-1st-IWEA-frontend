import React from 'react';
import { useEffect, useState } from 'react';
import PaymentAside from './component/PaymentAside/PaymentAside';
import PaymentInfo from './component/PaymentInfo/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [product, setProduct] = useState([]);

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

  const handleCancle = (id, productTotalPrice) => {
    console.log(id);
    fetch('http://10.58.52.170:3000/orders', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        orderId: id,
        totalprice: productTotalPrice,
      }),
    });
    console.log(product);

    const changed = product.map(order => {
      console.log(order.orderId, id, order.orderId === id);
      if (order.orderId === id) {
        order.status = '주문 취소';
      }
      return order;
    });
    console.log(changed);

    setProduct(changed);
  };

  return (
    <div className="payment-wrap">
      <div className="payment-content">
        <div className="payment-aside-wrap">
          <PaymentAside />
        </div>
        <div className="payment-info-wrap">
          <PaymentInfo product={product} onCancle={handleCancle} />
        </div>
      </div>
    </div>
  );
};

export default Payment;

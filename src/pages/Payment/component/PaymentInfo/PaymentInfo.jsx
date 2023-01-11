import React from 'react';
import PaymentInfoItem from './PaymentInfoItem/PaymentInfoItem';
import './PaymentInfo.scss';

const PaymentInfo = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div className="product-info">
        <h1 className="product-info-title">구매 내역</h1>
        {product.map(data => (
          <PaymentInfoItem key={data.id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;

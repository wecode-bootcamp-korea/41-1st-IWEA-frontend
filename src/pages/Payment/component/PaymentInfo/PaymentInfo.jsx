import React from 'react';
import PaymentInfoItem from './PaymentInfoItem/PaymentInfoItem';
import './PaymentInfo.scss';

const PaymentInfo = () => {
  return (
    <div>
      <div className="product-info">
        <h1 className="product-info-title">구매 내역</h1>
        <PaymentInfoItem />
        <PaymentInfoItem />
        <PaymentInfoItem />
        <PaymentInfoItem />
      </div>
    </div>
  );
};

export default PaymentInfo;

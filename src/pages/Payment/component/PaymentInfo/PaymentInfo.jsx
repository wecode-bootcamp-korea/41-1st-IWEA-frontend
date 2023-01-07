import React from 'react';
import PaymentInfoItem from './PaymentInfoItem/PaymentInfoItem';
import './PaymentInfo.scss';

const PaymentInfo = () => {
  return (
    <div>
      <div className="product-info">
        <h1 className="product-info-title">Payment History</h1>
        <PaymentInfoItem />
        <PaymentInfoItem />
        <PaymentInfoItem />
        <PaymentInfoItem />
        <PaymentInfoItem />
      </div>
    </div>
  );
};

export default PaymentInfo;

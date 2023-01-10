import React from 'react';
import SideModal from '../../components/SideModal/SideModal';
import PaymentAside from './component/PaymentAside/PaymentAside';
import PaymentInfo from './component/PaymentInfo/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment-wrap">
      <div className="payment-content">
        <div className="payment-aside-wrap">
          <PaymentAside />
        </div>
        <div className="payment-info-wrap">
          <PaymentInfo />
        </div>
      </div>
      <SideModal />
    </div>
  );
};

export default Payment;

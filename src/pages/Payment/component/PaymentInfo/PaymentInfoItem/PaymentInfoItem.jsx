import React from 'react';
import './PaymentInfoItem.scss';

const PaymentInfoItem = () => {
  return (
    <div>
      <div className="payment-info-item">
        <div className="payment-info-data">
          <p className="payment-info-date">2023-01-06</p>
          <h1>Iwea 온라인</h1>
          <p>
            <span>₩</span>
            100,000원
          </p>
          <button>주문 취소</button>
        </div>
        <div className="payment-info-state">
          <p>결제 취소</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoItem;

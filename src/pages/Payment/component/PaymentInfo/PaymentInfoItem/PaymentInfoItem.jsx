import React from 'react';
import './PaymentInfoItem.scss';

const PaymentInfoItem = ({ product }) => {
  return (
    <div className="payment-info-item">
      <div className="payment-info-data">
        <p className="payment-info-date">2023-01-06</p>
        <p className="payment-info-name">
          <span>{product.englishName}</span>
          <span>{product.koreanName}</span>
        </p>
        <p className="payment-info-buy">
          <span>{product.eachPrice}</span>
          <span>IWEA 온라인</span>
        </p>
        <p className="payment-info-desc">
          구매가 완료되었습니다. 이용해주셔서 감사합니다.
          <br />
          추가 문의사항은 IWEA 고객센터에 문의해주세요.
        </p>
      </div>
      <div className="payment-info-state">
        <button>결제 취소</button>
      </div>
    </div>
  );
};

export default PaymentInfoItem;

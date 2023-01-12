import React from 'react';
import PaymentInfoItem from './PaymentInfoItem/PaymentInfoItem';
import './PaymentInfo.scss';

const PaymentInfo = ({ product, onCancle }) => {
  return (
    <div className="product-info-wrap">
      <div className="product-info">
        <h1 className="product-info-title">구매 내역</h1>
        {product.map(data => {
          return (
            <PaymentInfoItem
              key={data.orderId}
              id={data.orderId}
              productDate={data.date}
              productStatus={data.status}
              productTotalPrice={data.totalPrice}
              products={data.products}
              onCancle={onCancle}
            />
          );
        })}
      </div>
      <p className="payment-info-desc">
        구매가 완료되었습니다. 이용해주셔서 감사합니다.
        <br />
        추가 문의사항은 IWEA 고객센터에 문의해주세요.
      </p>
    </div>
  );
};

export default PaymentInfo;

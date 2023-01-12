import React from 'react';
import './PaymentInfoData.scss';

const PaymentInfoData = ({
  productImg,
  productName,
  productPrice,
  productCount,
  productTotalPrice,
}) => {
  return (
    <div className="payment-info-wrap">
      <p className="payment-info-image">
        <img src={productImg} alt="구매 상품 이미지" />
      </p>
      <div className="payment-info">
        <p className="payment-info-name">
          <span>{productName}</span>
        </p>
        <p className="payment-info-buy">
          <span>
            {productPrice.toLocaleString()}
            <span>원</span>
          </span>
          <span>
            {productCount}
            <span>개</span>
          </span>
        </p>
      </div>
      {/* <p className="payment-info-totalprice">{productTotalPrice}</p> */}
    </div>
  );
};

export default PaymentInfoData;

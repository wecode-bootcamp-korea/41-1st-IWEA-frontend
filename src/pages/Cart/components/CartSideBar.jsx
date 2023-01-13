import React, { useEffect } from 'react';
import './CartSideBar.scss';

const CartSideBar = ({ totalPrice, openPaymentModal }) => {
  return (
    <div className="CartSideBar">
      <div className="order">
        <span className="order-history">주문 내역</span>
        <div className="shipping-price">
          <span>전체 배송비</span>
          <span>3만원 이상 주문 시 배송비가 무료입니다.</span>
        </div>
        <div className="total-price">
          <span>총 주문금액</span>
          <span className="total-price-won">₩ {totalPrice}</span>
        </div>
      </div>
      <button className="payment-btn" onClick={openPaymentModal}>
        <span>결제하기</span>
        <div className="arrow-btn" type="button">
          <i className="fas fa-solid fa-arrow-right" />
        </div>
      </button>
    </div>
  );
};

export default CartSideBar;

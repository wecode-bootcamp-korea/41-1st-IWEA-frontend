import React, { useEffect } from 'react';
import './PaymentModal.scss';
import { useNavigate } from 'react-router-dom';

function PaymentModal({ closePaymentModal, data, totalPrice }) {
  const { cartId, productId, quantity } = data;
  const navigate = useNavigate();
  const orderPayment = () => {
    fetch('http://10.58.52.184:3000/orders', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        cartId: cartId,
        products: [{ productId: productId, quantity: quantity }],
        totalPrice: totalPrice,
      }),
    }).then(result => {
      if (result.status === 201) {
        navigate('/payment');
      }
    });
  };

  return (
    <div className="cart-modal-bg" onClick={closePaymentModal}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-modal-content">
          <h4>결제하시겠습니까?</h4>
        </div>
        <span className="move-payment">
          확인을 누르시면 결제내역 페이지로 이동합니다.
        </span>
        <div className="cart-modal-button-wrapper">
          <button className="confirm-button" onClick={orderPayment}>
            확인
          </button>
          <button className="cancel-button" onClick={closePaymentModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;

import React from 'react';
import './PaymentModal.scss';

function PaymentModal({ closePaymentModal, paymentSubmit }) {
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
          <button className="confirm-button" onClick={paymentSubmit}>
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

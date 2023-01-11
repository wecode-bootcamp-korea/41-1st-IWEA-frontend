import React from 'react';
import './ProductInfoModal.scss';
// import { useState } from 'react';

const ProductInfoModal = ({ setModalOpen, productLongDesc }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="product-modal-wrap"
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        closeModal();
      }}
    >
      <div className="product-modal">
        <button className="modal-close-btn" onClick={closeModal}>
          <img src="/images/close.png" alt="닫음" />
        </button>
        <h1 className="modal-name">제품 설명</h1>
        <p className="modal-desc">{productLongDesc}</p>
      </div>
    </div>
  );
};
export default ProductInfoModal;

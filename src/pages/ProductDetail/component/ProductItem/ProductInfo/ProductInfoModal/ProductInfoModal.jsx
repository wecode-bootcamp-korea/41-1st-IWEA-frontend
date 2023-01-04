import React from 'react';
import './ProductInfoModal.scss';
// import { useState } from 'react';

const ProductInfoModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="product-modal-wrap">
      <div className="product-modal">
        <button className="modal-close-btn" onClick={closeModal}>
          x
        </button>
        <h1 className="modal-name">제품 설명</h1>
        <p className="modal-desc">제품에 대한 설명입니다.</p>
      </div>
    </div>
  );
};
export default ProductInfoModal;

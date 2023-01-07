import React from 'react';
import './ProductInfoModal.scss';
// import { useState } from 'react';

const ProductInfoModal = ({ setModalOpen, product }) => {
  const { long_description } = product;
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
        <p className="modal-desc">{long_description}</p>
      </div>
    </div>
  );
};
export default ProductInfoModal;

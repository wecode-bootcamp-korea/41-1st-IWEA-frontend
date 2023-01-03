import React from 'react';
import './ProductInfo.scss';

const ProductInfo = () => {
  return (
    <div className="product-info-wrap">
      <div className="product-info-item">
        <p>제품 설명</p>
      </div>
      <div className="product-info-item">
        <p>치수</p>
      </div>
    </div>
  );
};

export default ProductInfo;

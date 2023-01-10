import React from 'react';
import ProductAsideInfo from './ProductAsideInfo/ProductAsideInfo';
import ProductContentBuy from './ProductAsideBuy/ProductAsideBuy';
import './ProductAside.scss';

const ProductContent = ({ product }) => {
  return (
    <div className="product-content-wrap">
      <div className="product-content-list">
        <ProductAsideInfo product={product} />
        <ProductContentBuy />
        <button>구매하기</button>
      </div>
    </div>
  );
};

export default ProductContent;

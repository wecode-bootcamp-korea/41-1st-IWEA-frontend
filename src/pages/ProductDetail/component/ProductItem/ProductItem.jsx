import React from 'react';
import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductItem = () => {
  return (
    <div className="product-item">
      <ProductImg />
      <ProductInfo />
    </div>
  );
};

export default ProductItem;

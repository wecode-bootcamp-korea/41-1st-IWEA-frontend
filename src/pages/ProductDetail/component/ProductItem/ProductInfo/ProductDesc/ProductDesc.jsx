import React from 'react';
import './ProductDesc.scss';

const ProductDesc = ({ product }) => {
  const { short_description } = product;
  return (
    <div className="product-info-desc">
      <p className="short-desc">{short_description}</p>
    </div>
  );
};

export default ProductDesc;

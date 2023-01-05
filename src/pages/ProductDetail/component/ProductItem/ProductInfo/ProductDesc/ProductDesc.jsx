import React from 'react';
import './ProductDesc.scss';

const ProductDesc = ({ productList }) => {
  const { short_description } = productList;
  return (
    <div className="product-info-desc">
      <p className="short-desc">{short_description}</p>
    </div>
  );
};

export default ProductDesc;

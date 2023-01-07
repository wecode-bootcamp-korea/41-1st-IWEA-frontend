import React from 'react';
import './ProductDesc.scss';

const ProductDesc = ({ productShortDesc }) => {
  return (
    <div className="product-info-desc">
      <p className="short-desc">{productShortDesc}</p>
    </div>
  );
};

export default ProductDesc;

import React from 'react';
import './ProductAsideInfo.scss';

const productAsideInfo = () => {
  return (
    <div className="product-aside">
      <h1 className="english-name">{}</h1>
      <h1 className="korean-name">{}</h1>
      <p className="product-aside-price">
        <span>￦</span>
        {}
      </p>
    </div>
  );
};

export default productAsideInfo;

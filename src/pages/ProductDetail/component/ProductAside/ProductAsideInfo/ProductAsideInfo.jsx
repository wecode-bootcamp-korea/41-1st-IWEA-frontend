import React from 'react';
import './ProductAsideInfo.scss';

const productAsideInfo = ({ product }) => {
  const { korean_name, english_name, price } = product;
  console.log(product);
  return (
    <div className="product-aside">
      <div className="product-aside-title">
        <span className="english-name">{korean_name}</span>
        <span className="korean-name">{english_name}</span>
      </div>
      <p className="product-aside-price">
        <span>￦</span>
        {price}
      </p>
    </div>
  );
};

export default productAsideInfo;

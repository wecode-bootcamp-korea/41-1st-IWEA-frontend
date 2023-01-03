import React from 'react';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
  const { imageUrl, name, email } = product;

  return (
    <div className="ProductItem">
      <img className="productItem-image" src={imageUrl} alt="product" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default ProductItem;

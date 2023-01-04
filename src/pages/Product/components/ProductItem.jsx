import React from 'react';
import './ProductItem.scss';

const ProductItem = product => {
  // const { imageUrl, name, email } = product;
  const { korean_name, english_name, thumbnail, short_description, price } =
    product;

  console.log('???');
  console.log('szzs', { product });

  return (
    <div className="ProductItem">
      {/* <img className="productItem-image" src={imageUrl} alt="product" /> */}
      {/* <h2>{name}</h2> */}
      {/* <p>{email}</p> */}
      <img className="productItem-image" src={thumbnail} alt="product" />
      <h2>{english_name}</h2>
      <h2>{korean_name}</h2>
      <h2>{short_description}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductItem;

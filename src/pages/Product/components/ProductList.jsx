import React from 'react';
import './ProductList.scss';

const ProductList = ({ productList }) => {
  console.log('product', productList);
  console.log('product', productList.data);

  return (
    <div className="ProductList">
      {productList.data?.length > 0 &&
        productList.data?.map(product => {
          return (
            <div className="ProductItem" key={product.id}>
              <img
                className="productItem-image"
                src={product.thumbnail}
                alt="product"
              />
              <h2>{product.english_name}</h2>
              <h2>{product.korean_name}</h2>
              <h2>{product.short_description}</h2>
              <h2>{product.price}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;

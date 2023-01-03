import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.scss';

const ProductList = ({ productList }) => {
  return (
    <div className="ProductList">
      {productList.map(product => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;

// import { useEffect, useState } from 'react';
import ProductImg from './ProductImg/ProductImg';
// import ProductInfo from './ProductInfo/ProductInfo';
import './ProductItem.scss';

const ProductItem = ({ productList }) => {
  // console.log(productList);
  return (
    <div className="product-item">
      <div className="product-img-wrap">
        <ProductImg key={productList.id} productList={productList.image_url} />
      </div>
      {/* <ProductInfo /> */}
    </div>
  );
};

export default ProductItem;

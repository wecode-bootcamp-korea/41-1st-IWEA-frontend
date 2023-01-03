import React, { useState, useEffect } from 'react';
// import './Product.scss';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';

const Product = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);
  console.log(productList);

  return (
    <div className="Product">
      <div className="product-carousel-wrap">
        <Carousel />
      </div>
      <div className="product-lists-container">
        <input />
        <div className="line"></div>
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default Product;

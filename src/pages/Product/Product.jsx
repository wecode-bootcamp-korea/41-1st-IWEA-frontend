import React, { useState, useEffect } from 'react';
import './Product.scss';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';

const Product = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.92:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="Product">
      <div className="product-carousel-wrap">
        <Carousel />
      </div>
      <div className="product-lists-container">
        <input
          className="product-search"
          placeholder="찾으실 가구이름을 입력해주세요"
        />
        <div className="line" />
        <ProductSort />
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default Product;

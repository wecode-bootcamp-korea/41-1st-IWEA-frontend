import React, { useState, useEffect, useRef } from 'react';
import './Product.scss';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';
import { useParams, useSearchParams } from 'react-router-dom';

const Product = () => {
  const [productList, setProductList] = useState([]);

  const options = {
    threshold: 1.0,
  };
  const callback = () => {
    console.log('관측되었습니다.');
  };
  const observer = new IntersectionObserver(callback, options);
  const target = useRef(null);

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

  console.log(productList);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  return (
    <div className="Product">
      <div className="product-carousel-wrap">
        <Carousel />
      </div>
      <div className="product-lists-container" ref={target}>
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

import React, { useState, useEffect, useRef } from 'react';
import './Product.scss';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  const options = {
    threshold: 1.0,
  };
  const callback = () => {
    console.log('관측되었습니다.');
  };
  const observer = new IntersectionObserver(callback, options);
  const target = useRef(null);

  const handleSearchProduct = e => {
    setSearchProduct(e.target.value);
  };

  const searchedProduct = productList.filter(product => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);
  // console.log(productList);

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
          value={searchProduct}
          onChange={handleSearchProduct}
          placeholder="찾으실 가구이름을 입력해주세요"
        />
        <div className="line"></div>
        <ProductList productList={searchedProduct} />
      </div>
    </div>
  );
};

export default Product;

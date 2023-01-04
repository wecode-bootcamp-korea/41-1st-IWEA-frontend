import React, { useState, useEffect, useRef } from 'react';
import './Product.scss';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';
import { useParams, useSearchParams } from 'react-router-dom';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  // const params = useParams();
  // const sortby = searchParams.get('sortby');

  const options = {
    threshold: 1.0,
  };
  const callback = () => {
    // console.log('관측되었습니다.');
  };
  const observer = new IntersectionObserver(callback, options);
  const target = useRef(null);

  const handleSearchProduct = e => {
    setSearchProduct(e.target.value);
  };

  // const searchedProduct = productList.filter(product => {
  //   return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  // });

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

  // useEffect(() => {
  //   fetch('http://10.58.52.73:3000/product', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       korean_name: korean_name,
  //       english_name: english_name,
  //       thumbnail : thumbnail,
  //       short_description: short_description,
  //       price: price,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(data => setProductList(data));
  //   });
  // };

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
        <div className="line" />
        <ProductSort />
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default Product;

import React, { useState, useEffect } from 'react';

// import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';

import './Product.scss';

const Product = () => {
  const [productList, setProductList] = useState([]);
  // comnst [sendItem, setSendItem] = useState([])
  // const [searchParams, setSearchPrams] = useSearchParams();

  // 쿼리스트링 구현하기 - 버튼을 눌러서 백엔드서버로 보내고, 다시 GET한다.
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useParams();
  // const paramsId = useParams();
  // console.log('쿼리스트링확인',queryString);

  useEffect(() => {
    fetch('http://10.58.52.62:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);
  // console.log(data);
  // const handleSendToCartBtn = productsId => {
  //   fetch('http://10.58.52.92:3000/cart', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Athorization: window.localStorage.getItem('TOKEN'),
  //     },
  //     body: JSON.stringify({ "??","??" }), // JSON 안 객체로 무엇을 지칭하고 뜻하는 걸까?
  //   });
  // };

  // useEffect(() => {
  //   fetch('http://10.58.52.92:3000/$???', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => setSendItem(result));
  // }, [paramsId, searchParams]);
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

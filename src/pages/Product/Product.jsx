import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AlertModal from './components/AlertModal/AlertModal';

import Carousel from './components/Carousel/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';

import './Product.scss';

const Product = () => {
  const [isAlertOn, setIsAlertOn] = useState(false);
  const alertRef = useRef();

  useEffect(() => {
    return window.localStorage.setItem(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3Mjk4Mjk5OX0.e5U_dS5bGyY-w7Kqay_3wdqCVa8pmgXNAhwdSAKh6W8'
    );
  }, []);

  // const params = useParams();
  // const category_id = (params.const[(productList, setProductList)] = useState(
  //   []
  // ));

  // 페이지네이션 Code
  // const [searchParams, setSearchParams] = useParams();
  // const offset = searchParams.get('offset');
  // const limit = searchParams.get('limit');

  // const handleMoreLoad = moreLoad => {
  //   console.log('handleMoreLoad 함수 실행중..');
  //   searchParams.set('offset', 12);
  //   setSearchParams(searchParams);
  // };

  const [productList, setProductList] = useState([]);

  // fetch에 ?start=${offset}&limit=${limit} 추가
  useEffect(() => {
    fetch(`http://10.58.52.92:3000/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setProductList(data));
  }, []);

  // console.log(productList);

  const handleSendToCartBtn = productsId => {
    console.log('handleSendToCartBtn작동중...');
    setIsAlertOn(true);
    fetch('http://10.58.52.92:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Athorization: window.localStorage.getItem('TOKEN'),
      },

      body: JSON.stringify({
        productsId: productList.id,
      }),
    });
  };

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
        <ProductList
          productList={productList}
          handleSendToCartBtn={handleSendToCartBtn}
        />
        {/* <button onClick={handleMoreLoad}>더보기</button> */}
        <button onClick={handleSendToCartBtn}>
          장바구니 눌러서 alert나오게하기
        </button>
        <div ref={alertRef}>
          {isAlertOn === true ? (
            <AlertModal className="AlertModal" setIsAlertOn={setIsAlertOn} />
          ) : (
            <AlertModal
              className="AlertModal AlertModalHidden"
              setIsAlertOn={setIsAlertOn}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

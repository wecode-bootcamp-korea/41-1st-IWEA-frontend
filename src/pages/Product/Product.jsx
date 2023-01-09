import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import AlertModal from './components/AlertModal/AlertModal';

import Carousel from './components/Carousel/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';

import './Product.scss';

// const getQueryString = queries => {
//   const qs = Object.entries(queries)
//     .filter(([key, value]) => value)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&');

//   if (!qs) return '';

//   return '?' + qs;
// };

const Product = () => {
  const [productList, setProductList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [tabSwitch, setTabSwitch] = useState(1);
  const [sortSwitch, setSortSwitch] = useState('');

  const category = searchParams.get('category');
  const sort = searchParams.get('sort');

  // const queryMap = {
  //   category: searchParams.get('category'),
  //   sort: searchParams.get('sort'),
  // };

  // console.log(getQueryString(queryMap));

  // 페이지네이션 Code
  // const offset = searchParams.get('offset');
  // const limit = searchParams.get('limit');

  const [isAlertOn, setIsAlertOn] = useState(false);
  const alertRef = useRef();

  useEffect(() => {
    return window.localStorage.setItem(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3Mjk4Mjk5OX0.e5U_dS5bGyY-w7Kqay_3wdqCVa8pmgXNAhwdSAKh6W8'
    );
  }, []);

  const handleCategoryTab = pageId => {
    console.log(`${pageId} handleCategoryTab 작동중...`);
    searchParams.set('category', pageId);
    setSearchParams(searchParams);
    setTabSwitch(pageId);
  };

  const handleSortTab = sortMethod => {
    console.log(`${sortMethod} handleSortTab 작동중...`);
    searchParams.set('sort', sortMethod);
    setSearchParams(searchParams);
    setSortSwitch(sortMethod);
  };
  // const handleMoreLoad = moreLoad => {
  //   console.log('handleMoreLoad 함수 실행중..');
  //   searchParams.set('offset', 12);
  //   setSearchParams(searchParams);
  // };

  // SwitchTab code
  // fetch에 ?start=${offset}&limit=${limit}&category=${category}&sort=${sort} 추가
  // ?start=${offset}&limit=${limit}&cate`gory=${category}&sort=${sort}
  useEffect(() => {
    fetch(
      // `http://10.58.52.69:3000/products?category=${category}&sort=${sort}`,
      `http://10.58.52.69:3000/products?${searchParams.toString()}`,
      // `http://10.58.52.69:3000/products${getQueryString(queryMap)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: window.localStorage.getItem('TOKEN'),
        },
      }
    )
      .then(response => response.json())
      .then(data => setProductList(data));
  }, [category, sort]);

  // console.log(productList);
  const handleSendToCartBtn = productId => {
    console.log('handleSendToCartBtn작동중...');
    setIsAlertOn(true);
    fetch('http://10.58.52.69:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        productId: productId,
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
        <Carousel handleCategoryTab={handleCategoryTab} />
      </div>
      <div className="product-lists-container">
        <input
          className="product-search"
          placeholder="찾으실 가구이름을 입력해주세요"
        />
        <div className="line" />
        <ProductSort handleSortTab={handleSortTab} />

        <ProductList
          productList={productList}
          handleSendToCartBtn={handleSendToCartBtn}
        />
        {/* <button onClick={handleMoreLoad}>더보기</button> */}
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

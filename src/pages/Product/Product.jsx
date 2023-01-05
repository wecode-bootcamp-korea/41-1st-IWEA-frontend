import React, { useState, useEffect } from 'react';

import Carousel from '../../components/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';

import './Product.scss';

const Product = () => {
  const [productList, setProductList] = useState([]);
  // comnst [sendItem, setSendItem] = useState([])
  // const [searchParams, setSearchPrams] = useSearchParams();

  // 페이지네이션 Code
  // const [searchParams, setSearchParams] = useParams();
  // const offset = searchParams.get('offset');
  // const limit = searchParams.get('limit');

  // const handleMoreLoad = moreLoad => {
  //   console.log('handleMoreLoad 함수 실행중..');
  //   searchParams.set('offset', 12);
  //   setSearchParams(searchParams);
  // };

  // fetch에 ?start=${offset}&limit=${limit} 추가
  useEffect(() => {
    fetch(`http://10.58.52.62:3000/products`, {
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
        {/* <button onClick={handleMoreLoad}>더보기</button> */}
      </div>
    </div>
  );
};

export default Product;

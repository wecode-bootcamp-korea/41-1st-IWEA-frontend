import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import AlertModal from './components/AlertModal/AlertModal';
import Carousel from './components/Carousel/Carousel';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';
import './Product.scss';

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [countLimit, setCountLimit] = useState(1);
  const category = searchParams.get('category');
  const sort = searchParams.get('sort');
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  const [isAlertOn, setIsAlertOn] = useState(false);

  const handleCategoryTab = pageId => {
    searchParams.set('category', pageId);
    setSearchParams(searchParams);
  };

  const handleSortTab = sortMethod => {
    searchParams.set('sort', sortMethod);
    setSearchParams(searchParams);
  };

  const handleMoreLoad = count => {
    searchParams.set('limit', countLimit * 12);
    setCountLimit(countLimit + 1);
  };

  useEffect(() => {
    fetch(`http://10.58.52.241:3000/products?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      });
  }, [category, sort, offset, limit]);

  const handleSendToCartBtn = productId => {
    setIsAlertOn(true);
    fetch('http://10.58.52.241:3000/carts', {
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

        <button
          className="more-btn"
          onClick={() => {
            handleMoreLoad(countLimit);
          }}
        >
          더보기
        </button>
        <div>
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

<<<<<<< HEAD
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ProductDetail = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const itemId = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.92:3000/products/productId/${itemId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setItem(data.data));
  }, []);

  console.log('item 배열 값 확인', item);
  console.log('itemId 값 확인', itemId);

  return (
    <div>
      ProductDetail
      <h2>{item.english_name}</h2>
      <h2>{item.price}</h2>
    </div>
  );
};
=======
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [slideItemList, setSlideItemList] = useState([]);
  const params = useParams();
  const productId = params.id;
>>>>>>> main

  useEffect(() => {
    fetch(`http://10.58.52.155:3000/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProduct(data.data);
      });
  }, [productId]);

  useEffect(() => {
    fetch('http://10.58.52.155:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSlideItemList(data.data);
      });
  }, []);

  return (
    <div className="product-wrap">
      {product.id ? (
        <div className="product-content">
          <div className="product-main">
            <ProductItem
              productImg={product.image_url}
              productLongDesc={product.long_description}
              productShortDesc={product.short_description}
            />
            <ProductAside product={product} />
          </div>
          <div className="product-first-slide">
            <h1>이 제품은 어때요?</h1>
            <ProductSlide slideItemList={slideItemList} />
          </div>
          <div className="product-second-slide">
            <h1>함께 사용해보세요</h1>
            <ProductSlide slideItemList={slideItemList} />
          </div>
        </div>
      ) : (
        <>상품이 없습니다.</>
      )}
    </div>
  );
};
export default ProductDetail;

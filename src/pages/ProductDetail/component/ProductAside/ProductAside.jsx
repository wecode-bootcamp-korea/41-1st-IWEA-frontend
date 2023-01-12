import React, { useEffect } from 'react';
import ProductAsideInfo from './ProductAsideInfo/ProductAsideInfo';
import ProductContentBuy from './ProductAsideBuy/ProductAsideBuy';
import './ProductAside.scss';
import { useNavigate } from 'react-router-dom';

const ProductContent = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;

  const handleGoToCart = () => {
    fetch('http://10.58.52.170:3000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: id,
      }),
    });
  };
  return (
    <div className="product-content-wrap">
      <div className="product-content-list">
        <ProductAsideInfo product={product} />
        <ProductContentBuy />
        <button className="go-to-cart" onClick={handleGoToCart}>
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ProductContent;

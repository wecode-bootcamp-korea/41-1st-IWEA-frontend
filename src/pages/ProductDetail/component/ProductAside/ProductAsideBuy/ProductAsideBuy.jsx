import React from 'react';
import './ProductAsideBuy.scss';

const ProductAsideBuy = () => {
  return (
    <div className="product-aside-buy">
      <p className="procudt-aside-buy-desc">어떻게 구매하시겠어요?</p>
      <ul className="product-aside-buy-wrap">
        <li className="product-aside-buy-item">
          <img
            src="/images/ProductDetail/delivery-truck.png"
            alt="구매방법 : 택배배송"
          />
          <div className="product-aside-buy-desc">
            <h2>배송</h2>
            <p>구매 가능 여부 확인</p>
          </div>
        </li>
        <li className="product-aside-buy-item">
          <img src="/images/ProductDetail/shop.png" alt="구매방법 : 매장구매" />
          <div className="product-aside-buy-desc">
            <h2>매장 구매</h2>
            <p>매장 재고 및 입고 날짜 확인</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductAsideBuy;

import React from 'react';
import './ProductSlideItem.scss';

const ProductSlideItem = ({
  productImg,
  productKrName,
  productEngName,
  productPrice,
}) => {
  // console.log(product);
  return (
    <div className="product-slide-item">
      <img src={productImg} alt="제품사진" />
      <span className="name">{productEngName}</span>
      <span className="name">{productKrName}</span>
      <p className="price">
        <span>￦</span>
        {productPrice}
      </p>
      <div className="product-slide-icon">
        <img
          src="/images/ProductDetail/free-icon-add-cart-7326992.png"
          alt="장바구니"
          className="product-slice-cart"
        />
        <img
          src="/images/ProductDetail/heart.png"
          alt="좋아요"
          className="product-slide-heart"
        />
      </div>
    </div>
  );
};

export default ProductSlideItem;

import React from 'react';
import './ProductSlideItem.scss';

const ProductSlideItem = ({ productCard, slide }) => {
  const { tumbnail_url, name, price } = productCard;
  return (
    <div className="product-slide-item">
      <img key={productCard.id} src={tumbnail_url} alt="제품사진" />
      <p className="name">{name}</p>
      <p className="price">
        <span>￦</span>
        {price}
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

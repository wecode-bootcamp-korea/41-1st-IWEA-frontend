import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ productList, handleSendToCartBtn }) => {
  // console.log('handleSendToCartBtn잇음?', handleSendToCartBtn);
  return (
    <div className="ProductList">
      {productList.data?.length > 0 &&
        productList.data?.map(product => {
          return (
            <div className="ProductItem" key={product.id}>
              <Link to={`/productdetail/${product.id}`}>
                <img
                  className="productItem-image"
                  src={product.thumbnail}
                  alt="product"
                />
              </Link>
              <h2>{product.english_name}</h2>
              <h2>{product.korean_name}</h2>
              <h2>{product.short_description}</h2>
              <h2>{product.price}</h2>
              <button
                onClick={() => {
                  handleSendToCartBtn(product.id);
                }}
              >
                장바구니로~
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;

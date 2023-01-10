import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';
import basket from '../../../images/basket.png';

const ProductList = ({ productList, handleSendToCartBtn }) => {
  // console.log('handleSendToCartBtn잇음?', handleSendToCartBtn);
  return (
    <div className="ProductList">
      {productList.data?.length > 0 &&
        productList.data?.map(product => {
          return (
            <div className="ProductItem" key={product.productId}>
              <Link to={`/productdetail/${product.productId}`}>
                <img
                  className="productItem-image"
                  src={product.thumbnail}
                  alt="product"
                />
              </Link>
              <h2>{product.englishName}</h2>
              <h3>{product.koreanName}</h3>
              <h3>{product.price}</h3>
              <h3>{product.short_description}</h3>
              <button
                onClick={() => {
                  handleSendToCartBtn(product.productId);
                }}
              >
                <img id="basket" src={basket} alt="basket" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;

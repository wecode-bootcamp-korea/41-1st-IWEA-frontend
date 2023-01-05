import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ productList }) => {
  // console.log('product', productList);
  // console.log('product', productList.data);

  return (
    <div className="ProductList">
      {productList.data?.length > 0 &&
        productList.data?.map(product => {
          return (
            <Link key={product.id} to={`/productdetail/${product.id}`}>
              <div className="ProductItem">
                <img
                  className="productItem-image"
                  src={product.thumbnail}
                  alt="product"
                />
                <h2>{product.english_name}</h2>
                <h2>{product.korean_name}</h2>
                <h2>{product.short_description}</h2>
                <h2>{product.price}</h2>
                <button>장바구니로~</button>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;

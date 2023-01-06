import { useState, useEffect } from 'react';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productList, setproductList] = useState([]);

  // product image 불러오기
  useEffect(() => {
    fetch('http://10.58.52.62:3000/products/productId/10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setproductList(data.data);
      });
  }, []);

  return (
    <div className="product-wrap modal-bg">
      <div className="product-content">
        <div className="product-main">
          <ProductItem productList={productList} />
          <ProductAside productList={productList} />
        </div>
        <ProductSlide productList={productList} />
      </div>
    </div>
  );
};
export default ProductDetail;

import { useState, useEffect } from 'react';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [productList, setproductList] = useState([]);
  // const [productAsideList, setProductAsideList] = useState([]);

  // product image 불러오기
  useEffect(() => {
    fetch('http://10.58.52.92:3000/products/productId/10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.data);
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
        <ProductSlide />
      </div>
    </div>
  );
};
export default ProductDetail;

import { useState } from 'react';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [modalBgColor, setModalBgColor] = useState(true);

  return (
    <div className="product-wrap modal-bg">
      <div className="product-content">
        <div className="product-main">
          <ProductItem />
          <ProductAside />
        </div>
        <ProductSlide />
      </div>
    </div>
  );
};
export default ProductDetail;

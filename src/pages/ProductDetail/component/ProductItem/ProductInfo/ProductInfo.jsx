import './ProductInfo.scss';
import ProductInfoModal from './ProductInfoModal/ProductInfoModal';
import { useState } from 'react';

const ProductInfo = () => {
  const [modal, setModal] = useState(true);

  return (
    <div className="product-info-wrap">
      <button
        className="product-info-item"
        onClick={() => {
          setModal(!modal);
        }}
      >
        <span className="product-info-modal">
          <span>제품 설명</span>
          {modal ? <ProductInfoModal /> : null}
        </span>
      </button>
    </div>
  );
};

export default ProductInfo;

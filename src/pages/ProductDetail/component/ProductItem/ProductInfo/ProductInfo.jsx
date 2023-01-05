import './ProductInfo.scss';
import ProductInfoModal from './ProductInfoModal/ProductInfoModal';
import { useState } from 'react';
import ProductDesc from './ProductDesc/ProductDesc';

const ProductInfo = ({ productList }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="product-info-wrap">
      <div className="product-info-desc">
        <ProductDesc productList={productList} />
      </div>
      <div className="product-info-item">
        <span className="product-info-modal" onClick={showModal}>
          <span>제품 설명</span>
        </span>
      </div>
      {modalOpen && (
        <ProductInfoModal
          productList={productList}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
};

export default ProductInfo;

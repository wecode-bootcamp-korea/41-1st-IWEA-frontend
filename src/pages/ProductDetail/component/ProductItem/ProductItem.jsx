import { useEffect, useState } from 'react';
import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';
import './ProductItem.scss';

const ProductItem = () => {
  const [productImgList, setProductImgList] = useState([]);
  const [productModal, setProductModal] = useState('');

  const showModal = () => {
    setProductModal(true);
  };

  useEffect(() => {
    fetch('../data/list-data.json')
      .then(res => res.json())
      .then(result => {
        setProductImgList(result);
      });
  }, []);

  return (
    <div className="product-item">
      <div className="product-img-wrap">
        {productImgList.map(productImg => (
          <ProductImg key={productImg.id} productImg={productImg} />
        ))}
      </div>
      <ProductInfo />
    </div>
  );
};

export default ProductItem;

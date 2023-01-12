import { useRef } from 'react';
import './ProductSlide.scss';
import ProductSlideItem from './ProductSlideItem/ProductSlideItem';

const ProductSlide = ({ slideItemList }) => {
  const carouselRef = useRef(null);

  return (
    <div className="product-slide-wrap">
      <div className="product-slide-item-wrap">
        <div className="image-container" ref={carouselRef}>
          {slideItemList.map(slideItem => {
            return (
              <ProductSlideItem
                key={slideItem.id}
                productImg={slideItem.thumbnail}
                productKrName={slideItem.koreanName}
                productEngName={slideItem.englishName}
                productPrice={slideItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;

import { useRef } from 'react';
import './ProductSlide.scss';
import ProductSlideItem from './ProductSlideItem/ProductSlideItem';

const ProductSlide = ({ slideItemList }) => {
  // const [cardList, setCardList] = useState([]);
  // const { english_name, korean_name, price, iamge_url } = product;
  const carouselRef = useRef(null);

  console.log(slideItemList);

  return (
    <div className="product-slide-wrap">
      <div className="product-slide-item-wrap">
        <div className="image-container" ref={carouselRef}>
          {slideItemList.map(slideItem => {
            return (
              <ProductSlideItem
                key={slideItem.id}
                productImg={slideItem.thumbnail}
                productKrName={slideItem.korean_name}
                productEngName={slideItem.english_name}
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

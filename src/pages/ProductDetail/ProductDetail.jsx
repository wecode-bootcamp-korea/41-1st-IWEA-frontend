import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="product-wrap">
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

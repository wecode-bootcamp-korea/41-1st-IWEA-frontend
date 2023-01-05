import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';
import './ProductItem.scss';

const ProductItem = ({ productList }) => {
  return (
    <div className="product-item">
      <div className="product-img-wrap">
        <ProductImg key={productList.id} productList={productList.image_url} />
      </div>
      <ProductInfo key={productList.id} productList={productList} />
    </div>
  );
};

export default ProductItem;

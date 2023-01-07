import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';
import './ProductItem.scss';

const ProductItem = ({ productImg, productLongDesc, productShortDesc }) => {
  console.log(productImg);
  return (
    <div className="product-item">
      <div className="product-img-wrap">
        <ProductImg productImg={productImg} />
      </div>
      <ProductInfo
        productLongDesc={productLongDesc}
        productShortDesc={productShortDesc}
      />
    </div>
  );
};

export default ProductItem;

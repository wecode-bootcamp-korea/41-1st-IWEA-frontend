import './ProductImg.scss';

const ProductImg = ({ product }) => {
  const { image_url } = product;

  return (
    <div className="product-img">
      <img key={product.id} src={image_url} alt="이미지" />
    </div>
  );
};

export default ProductImg;

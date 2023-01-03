import './ProductImg.scss';

const ProductImg = ({ productImg }) => {
  const { tumbnail_url } = productImg;

  return (
    <div className="product-img">
      <img key={productImg.id} src={tumbnail_url} alt="이미지" />
    </div>
  );
};

export default ProductImg;

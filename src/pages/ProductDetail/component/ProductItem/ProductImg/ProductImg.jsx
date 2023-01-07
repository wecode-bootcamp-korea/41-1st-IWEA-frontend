import './ProductImg.scss';

const ProductImg = ({ product }) => {
  return (
    <div className="product-img">
      {product?.map(data => {
        return <img key={data.url} src={data.url} alt="이미지" />;
      })}
    </div>
  );
};

export default ProductImg;

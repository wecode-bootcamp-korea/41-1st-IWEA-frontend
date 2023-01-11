import './ProductImg.scss';

const ProductImg = ({ productImg }) => {
  return (
    <div className="product-img">
      {productImg?.map((data, idx) => {
        return <img key={idx} src={data.url} alt="이미지" />;
      })}
    </div>
  );
};

export default ProductImg;

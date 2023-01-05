import './ProductImg.scss';

const ProductImg = ({ productList }) => {
  // const { image_url } = productImage;
  // console.log(productImage);
  return (
    <div className="product-img">
      {productList.map(data => {
        return <img key={data.url} src={data.url} alt="이미지" />;
      })}
    </div>
  );
};

export default ProductImg;

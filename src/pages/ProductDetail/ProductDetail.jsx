import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [slideItemList, setSlideItemList] = useState([]);
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.155:3000/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.data);
        setProduct(data.data);
      });
  }, [productId]);

  useEffect(() => {
    fetch('http://10.58.52.155:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSlideItemList(data.data);
      });
  }, []);

  return (
    <div className="product-wrap">
      {product.id ? (
        <div className="product-content">
          <div className="product-main">
            <ProductItem
              productImg={product.image_url}
              productLongDesc={product.long_description}
              productShortDesc={product.short_description}
            />
            <ProductAside product={product} />
          </div>
          <div className="product-first-slide">
            <h1>이 제품은 어때요?</h1>
            <ProductSlide slideItemList={slideItemList} />
          </div>
          <div className="product-second-slide">
            <h1>함께 사용해보세요</h1>
            <ProductSlide slideItemList={slideItemList} />
          </div>
        </div>
      ) : (
        <>상품이 없습니다.</>
      )}
    </div>
  );
};
export default ProductDetail;

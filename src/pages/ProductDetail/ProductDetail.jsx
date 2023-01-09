import { useState, useEffect } from 'react';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  // const [product, setProduct] = useState();
  const [product, setProduct] = useState(MOCK_DATA.data);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/productId/10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.data);
        // setProduct(data.data);
      });
  }, []);

  return (
    <div className="product-wrap">
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
          <ProductSlide product={product} />
        </div>
        <div className="product-second-slide">
          <h1>함께 사용해보세요</h1>
          <ProductSlide product={product} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;

const MOCK_DATA = {
  data: {
    id: 10,
    korean_name: '제이크',
    english_name: 'JJAKE',
    short_description: '100% 순면 소재의 보송보송한 이불',
    long_description: 'IWEA의 시그니처 침구 상품인 제이크.',
    price: '39900.000',
    image_url: [
      {
        url: 'https://user-images.githubusercontent.com/110670796/210497180-2228c9c6-4551-4936-905f-0b473b14b0c1.png',
      },
      {
        url: 'https://user-images.githubusercontent.com/110670796/210497180-2228c9c6-4551-4936-905f-0b473b14b0c1.png',
      },
      {
        url: 'https://user-images.githubusercontent.com/110670796/210497180-2228c9c6-4551-4936-905f-0b473b14b0c1.png',
      },
      {
        url: 'https://user-images.githubusercontent.com/110670796/210497180-2228c9c6-4551-4936-905f-0b473b14b0c1.png',
      },
    ],
  },
};

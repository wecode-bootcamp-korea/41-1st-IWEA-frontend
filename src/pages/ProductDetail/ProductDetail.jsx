import { useState, useEffect } from 'react';
import ProductItem from './component/ProductItem/ProductItem';
import ProductAside from './component/ProductAside/ProductAside';
import ProductSlide from './component/ProductSlide/ProductSlide';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch('http://10.58.52.62:3000/products/productId/10', {
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
        <ProductSlide product={product} />
      </div>
    </div>
  );
};
export default ProductDetail;

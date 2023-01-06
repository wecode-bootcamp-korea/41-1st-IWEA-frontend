import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ProductDetail = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const itemId = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.92:3000/products/productId/${itemId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setItem(data.data));
  }, []);

  console.log('item 배열 값 확인', item);
  console.log('itemId 값 확인', itemId);

  return (
    <div>
      ProductDetail
      <h2>{item.english_name}</h2>
      <h2>{item.price}</h2>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from 'react';
import './ProductSort.scss';

const ProductSort = () => {
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);

  return (
    <div className="ProductSort">
      <button className="productSort-btn">
        정렬 {isSortBoxVisible ? '▲' : '▼'}
      </button>
      <button className="productSort-btn">
        가격 {isSortBoxVisible ? '▲' : '▼'}
      </button>
      <button className="productSort-btn">
        카테 {isSortBoxVisible ? '▲' : '▼'}
      </button>
    </div>
  );
};

export default ProductSort;

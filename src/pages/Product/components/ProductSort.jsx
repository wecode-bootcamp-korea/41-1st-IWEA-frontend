import React, { useState } from 'react';

import { SORT_LISTS, PRICE_TAG_LISTS } from './PageSortConstData';
import './ProductSort.scss';

const ProductSort = () => {
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);

  return (
    <div className="ProductSort">
      <button className="productSort-btn">
        정렬 {isSortBoxVisible ? '▲' : '▼'}
      </button>

      <div className="prdocutSort-btn-dropBox">
        {SORT_LISTS.map(sort => {
          return (
            <div key={sort.id} className="drop-box-element">
              <span>{sort.sortby}</span>
              <input type="radio" />
            </div>
          );
        })}
      </div>

      <button className="productSort-btn">
        가격 {isSortBoxVisible ? '▲' : '▼'}
      </button>
      <div className="prdocutSort-btn-dropBox">
        {PRICE_TAG_LISTS.map(price => {
          return (
            <div key={price.id} className="drop-box-element">
              <span>{price.priceRange}</span>
              <input type="radio" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSort;

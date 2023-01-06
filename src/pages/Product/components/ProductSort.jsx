import React, { useState } from 'react';
import { SORT_LISTS, PRICE_TAG_LISTS } from './PageSortConstData';
import './ProductSort.scss';

const ProductSort = () => {
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);

  return (
    // Params써서, onClick에 함수를 담는다.
    <div className="ProductSort">
      <div className="ProductSort">
        {SORTBTN_DATA?.map(sort => {
          return (
            <button className="productSort-btn">
              {sort.title}
              {isSortBoxVisible ? '▲' : '▼'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSort;

const SORTBTN_DATA = [
  {
    id: 1,
    title: '높은 가격 순',
    sort: 'price',
    method: 'DESC',
  },
  {
    id: 2,
    title: '낮은 가격 순',
    sort: 'price',
    method: 'ASC',
  },
  {
    id: 3,
    title: '이름 오름차 순',
    sort: 'name',
    method: 'DESC',
  },
  {
    id: 4,
    title: '이름 내림차 순',
    sort: 'name',
    method: 'ASC',
  },
];

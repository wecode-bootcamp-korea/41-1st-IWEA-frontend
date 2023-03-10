import React from 'react';
import './ProductSort.scss';

const ProductSort = ({ handleSortTab }) => {
  return (
    <div className="ProductSort">
      <div className="ProductSort">
        {SORTBTN_DATA?.map(sort => {
          return (
            <button
              className="productSort-btn"
              onClick={() => handleSortTab(sort.sort)}
            >
              {sort.title}
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
    sort: 'expensive',
    method: 'DESC',
  },
  {
    id: 2,
    title: '낮은 가격 순',
    sort: 'cheap',
    method: 'ASC',
  },
  {
    id: 3,
    title: '이름 오름차 순',
    sort: 'nameASC',
    method: 'DESC',
  },
  {
    id: 4,
    title: '이름 내림차 순',
    sort: 'nameDESC',
    method: 'ASC',
  },
  {
    id: 5,
    title: '신 상품 순',
    sort: 'new',
    method: 'ASC',
  },
  {
    id: 6,
    title: '오래된 상품 순',
    sort: 'old',
    method: 'ASC',
  },
];

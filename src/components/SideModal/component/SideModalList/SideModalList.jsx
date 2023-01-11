import React from 'react';
import './SideModalList.scss';
const SideModalList = ({ modal }) => {
  return (
    <div className="sidemodal-list">
      <p>
        <span>Hej </span>
        {/* <span>{modal.cartsList[0].koreanName}</span> */}
      </p>
      <p className="my-points">
        <span>내 포인트</span>
        {/* <span>{modal.userPoints}</span> */}
      </p>
    </div>
  );
};

export default SideModalList;

import React from 'react';
import './SideModalInfo.scss';
const SideModalInfo = ({ modalName, modalPoints }) => {
  return (
    <div className="sidemodal-info">
      <p>
        <span>Hej </span>
        <span>{modalName}</span>
      </p>
      <p className="my-points">
        <span>내 포인트</span>
        <span>{modalPoints}</span>
      </p>
    </div>
  );
};

export default SideModalInfo;

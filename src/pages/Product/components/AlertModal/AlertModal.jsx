import React from 'react';
import { Link } from 'react-router-dom';
import './AlertModal.scss';

const AlertModal = ({ setIsAlertOn, className }) => {
  const handleAlertOff = () => {
    setIsAlertOn(false);
  };
  return (
    <div className={className} onClick={handleAlertOff}>
      <div className="AlertModal-text-container">
        <span className="AlertModal-text">
          IWEA 제품이 <br /> 장바구니에 추가되었습니다.
        </span>

        <span className="AlertModal-move">
          <Link to="/cart">장바구니로 가기</Link>
        </span>
      </div>
    </div>
  );
};

export default AlertModal;

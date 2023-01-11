import React, { useState } from 'react';
import './HomeBanner.scss';

import arrowB1 from '../../../images/arrow-b.png';
import arrowB2 from '../../../images/arrow-b2.png';

const HomeBanner = () => {
  const [move, setMove] = useState(0);
  const active = {
    transform: `translate(${move}px)`,
    transition: 'all 2s',
  };
  const handleMoveRight = () => {
    setMove(prev => prev - 1399);
  };
  const handleMoveLeft = () => {
    setMove(prev => prev + 1399);
  };

  if (move === -3455) {
    return setMove(0);
  }

  return (
    <div className="HomeBanner">
      <div className="HomeBanner-content-container">
        <div style={active} className="HomeBanner-content">
          <p>프론트엔드</p>
          <div>
            <span>김성재</span>
            <span>김철호</span>
            <span>김우성</span>
            <span>임가림</span>
          </div>
        </div>
        <div style={active} className="HomeBanner-content">
          <p>백엔드</p>
          <div>
            <span>김가은</span>
            <span>심예윤</span>
          </div>
        </div>
      </div>
      <div className="HomeBanner-btn-container">
        {move === 0 ? (
          <button disabled onClick={handleMoveLeft}>
            <img src={arrowB1} alt="arrow-b" />
          </button>
        ) : (
          <button onClick={handleMoveLeft}>
            <img src={arrowB1} alt="arrow-b" />
          </button>
        )}
        {move === 0 ? (
          <button onClick={handleMoveRight}>
            <img src={arrowB2} alt="arrow-b2" />
          </button>
        ) : (
          <button disabled onClick={handleMoveRight}>
            <img src={arrowB2} alt="arrow-b2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;

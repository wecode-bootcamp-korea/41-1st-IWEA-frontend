import React from 'react';
import './HomeGrid.scss';

const HomeGrid = () => {
  return (
    <div className="HomeGrid">
      <div className="homeGrid-text">
        <h1>신제품을 만나보세요</h1>
        <div className="homeGrid-text-wrapper">
          <div className="text">
            EKVECKLARE 에크베클라레 쿠션, BRÖNDEN 브뢴덴 러그, PINNTORP 핀토르프
            테이블과 의자를 활용해 세련된 스칸디나비아 룩을 연출해 보세요.
            자수를 놓고 패치워크 기법을 쓴 전통적인 방식이 아닌 현대적인
            방식대로 색감을 입히고 프린팅 한 제품들이지만 전통 제품들만큼이나
            소중한 예술 작품이랍니다.
          </div>
          <button>모든 신제품 보러가기</button>
        </div>
      </div>
      <div className="homeGrid-container">
        <div className="itemOne" />
        <div className="itemTwo" />
        <div className="itemThree" />
        <div className="itemFour" />
        <div className="itemFive" />
      </div>
    </div>
  );
};

export default HomeGrid;

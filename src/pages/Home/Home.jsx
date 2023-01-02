import React from 'react';
import Header from './components/Header';
import HomeMain from './components/HomeMain';

const Home = () => {
  return (
    <div className="Home">
      {/* 헤더 - src컴포넌트 */}
      <Header />
      {/* 홈이미지(세일 + 베드룸) */}
      <HomeMain />
      {/* 카테고리 */}
      {/* 프로모션 */}
      {/* 그리드 */}
      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

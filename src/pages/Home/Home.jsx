import React from 'react';
// import CarouselTest from '../../components/Carousel';
import Header from './components/Header';
import HomeGrid from './components/HomeGrid';
import HomeMain from './components/HomeMain';

const Home = () => {
  return (
    <div className="Home">
      {/* 헤더 - src컴포넌트 */}
      <Header />
      {/* 메인 - 레이아웃 */}
      <HomeMain />
      {/* <CarouselTest /> */}
      <HomeGrid />

      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

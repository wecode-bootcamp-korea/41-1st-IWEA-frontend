import React from 'react';
import Carousel from '../../components/Carousel';
import Header from './components/Header';
import HomeEvent from './components/HomeEvent';
import HomeGrid from './components/HomeGrid';
import HomeMain from './components/HomeMain';

const Home = () => {
  return (
    <div className="Home">
      {/* 헤더 - src컴포넌트 */}
      <Header />
      <HomeMain />
      <Carousel />
      <HomeGrid />
      <HomeEvent />
      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

// rebase checking...

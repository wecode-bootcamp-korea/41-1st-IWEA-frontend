import React from 'react';
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
      <HomeGrid />
      <HomeEvent />
      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

// rebase checking...

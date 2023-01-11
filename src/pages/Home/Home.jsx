import React from 'react';
import HomeEvent from './components/HomeEvent';
import HomeGrid from './components/HomeGrid';
import HomeMain from './components/HomeMain';
import HomeEventCard from './components/HomeEventCard';
import HomeBanner from './components/HomeBanner';

const Home = () => {
  return (
    <div className="Home">
      {/* 헤더 - src컴포넌트 */}
      <HomeMain />
      <HomeEventCard />
      <HomeGrid />
      {/*<HomeEvent />*/}
      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

// rebase checking...

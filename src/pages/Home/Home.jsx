import React from 'react';
import Header from './components/Header';
import HomeGrid from './components/HomeGrid';
import HomeMain from './components/HomeMain';
import HomeEventCard from './components/HomeEventCard';
import HomeBanner from './components/HomeBanner';

const Home = () => {
  return (
    <div className="Home">
      {/* 헤더 - src컴포넌트 */}
      <Header />
      <HomeBanner />
      <HomeMain />
      <HomeEventCard />
      <HomeGrid />
      {/* 푸터 - src컴포넌트*/}
    </div>
  );
};

export default Home;

// rebase checking...

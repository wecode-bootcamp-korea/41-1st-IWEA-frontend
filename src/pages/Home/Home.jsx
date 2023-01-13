import React from 'react';
import HomeGrid from './components/HomeGrid';
import HomeEventCard from './components/HomeEventCard';
import HomeBanner from './components/HomeBanner';
import HomeMain from './components/HomeMain';

const Home = () => {
  return (
    <div className="Home">
      <HomeBanner />
      <HomeMain />
      <HomeEventCard />
      <HomeGrid />
    </div>
  );
};

export default Home;

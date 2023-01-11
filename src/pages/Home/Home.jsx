import React from 'react';
import HomeGrid from './components/HomeGrid';
import HomeMain from './components/HomeMain';
import HomeEventCard from './components/HomeEventCard';
import HomeBanner from './components/HomeBanner';

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

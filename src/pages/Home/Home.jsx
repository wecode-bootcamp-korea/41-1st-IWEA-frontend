import React from 'react';
import HomeGrid from './components/HomeGrid';
import HomeEventCard from './components/HomeEventCard';
import HomeBanner from './components/HomeBanner';

const Home = () => {
  return (
    <div className="Home">
      <HomeBanner />
      <HomeEventCard />
      <HomeGrid />
    </div>
  );
};

export default Home;

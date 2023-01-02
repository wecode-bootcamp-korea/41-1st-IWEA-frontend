import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CardCategory.scss';

// import required modules
import { Pagination } from 'swiper';

export default function App() {
  return (
    <>
      <h2>공간별 제품 쇼핑하기</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/Home/home-category1.png" alt="category-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Home/home-category2.png" alt="category-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Home/home-category3.png" alt="category-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Home/home-category4.png" alt="category-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Home/home-category5.png" alt="category-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/Home/home-category6.png" alt="category-6" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

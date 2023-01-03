import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scss';

import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

const Carousel = () => {
  const carouselRef = useRef(0);
  const [count, setCount] = useState(0);

  const handlePrevBtn = () => {
    setCount(count => {
      return count > 0 ? count - 1 : null;
    });
  };
  const handleNextBtn = () => {
    setCount(count => {
      return count < 5 ? count + 1 : (count = 0);
    });
  };

  return (
    <div className="Carousel">
      <div className="carousel-title">공간별 제품 쇼핑하기</div>
      <div className="carousel-container">
        <button className="carousel-prevbtn" onClick={handlePrevBtn}>
          <GrPrevious />
        </button>
        <button className="carousel-nextbtn" onClick={handleNextBtn}>
          <GrNext />
        </button>

        <div className="carousel-wrapper" ref={carouselRef}>
          {CAROUSEL_ITEM_LISTS.map(item => {
            return (
              <div
                key={item.id}
                className="carousel-box"
                style={{ transform: `translateX(${count * -100}px)` }}
              >
                <img className="carousel-image" src={item.src} alt={item.alt} />
                <button className="carousel-navbtn">{item.text}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const CAROUSEL_ITEM_LISTS = [
  {
    id: 1,
    src: './images/Home/home-category1.png',
    alt: 'carousel-img1',
    text: '침실',
  },
  {
    id: 2,
    src: './images/Home/home-category2.png',
    alt: 'carousel-img2',
    text: '조명',
  },
  {
    id: 3,
    src: './images/Home/home-category3.png',
    alt: 'carousel-img3',
    text: '의자',
  },
  {
    id: 4,
    src: './images/Home/home-category4.png',
    alt: 'carousel-img4',
    text: '협탁',
  },
  {
    id: 5,
    src: './images/Home/home-category5.png',
    alt: 'carousel-img5',
    text: '침구',
  },
  {
    id: 6,
    src: './images/Home/home-category6.png',
    alt: 'carousel-img6',
    text: '매트',
  },
];

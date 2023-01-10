import React from 'react';
import './Carousel.scss';
import { CAROUSEL_ITEM_LISTS } from './CarouselConstData';
import { useRef, useState, useEffect } from 'react';

const Carousel = ({ handleCategoryTab }) => {
  const [slide, setSlide] = useState(0);
  const carouselRef = useRef(null);
  const CAROUSELWIDTH = 200;

  console.log();

  const handleNext = () => {
    setSlide(slide + CAROUSELWIDTH);
  };

  const handlePrev = () => {
    setSlide(slide - CAROUSELWIDTH);
  };

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${slide}px)`;
    carouselRef.current.style.transition = '700ms';
  }, [slide]);

  return (
    <div className="CarouselTest">
      {/* Text */}
      <div className="CarouselTest-text">공간별 제품 쇼핑하기</div>
      {/* Carousel */}
      <div className="CarouselTest-wrapper">
        {/* Button  */}
        <button
          className="prevBtn"
          onClick={handleNext}
          style={{ display: slide === 0 ? 'none' : '' }}
        >
          이전으로
        </button>
        <button
          className="nextBtn"
          onClick={handlePrev}
          style={{ display: slide === CAROUSELWIDTH * 0.5 ? 'none' : '' }}
        >
          다음으로
        </button>
        <div className="CarouselTest-image-wrapper">
          <div className="image-container" ref={carouselRef}>
            {CAROUSEL_ITEM_LISTS?.map(data => {
              return (
                <div
                  key={data.id}
                  className="image-card"
                  onClick={() => handleCategoryTab(data.id)}
                >
                  <img key={data.id} src={data.src} alt={data.alt} />
                  <button className="linkBtn">{data.text}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react';
import { Link } from 'react-router-dom';

import './HomeMain.scss';

const HomeMain = () => {
  return (
    <div className="HomeMain">
      <div className="homeMain-big-title">
        <h1>Bonjour! 돌아오신 걸 환영해요!</h1>
      </div>
      <div className="homeMain-title">
        <p>
          <Link id="iwea-family">IWEA Family에 가입</Link>
          하여 다양한 홈 퍼니싱 영감과 할인 혜택, 리워드를 받아보세요.
        </p>
      </div>

      <div className="homeMain-big-title">
        <h2>
          올 겨울, 더 따뜻한 우리집을 위해 최대 70% 할인 + 멤버 5% 추가할인
        </h2>
      </div>
      <div className="homeMain-title">
        <div>
          <p>
            다가오는 연말연시를 맞아 더 낮은 가격의 홈퍼니싱 제품으로 사랑하는
            사람과 함께 따뜻한 겨울을 준비하세요. 11월 24일부터 1월 3일 까지
          </p>
        </div>
        <button>최대 70% 겨울세일 보러가기 </button>
      </div>

      <div className="homeMain-image-container">
        <img
          className="homeMain-image"
          src="./images/Home/home-mainimg1.png"
          alt="saleImg"
        />
        <img
          className="homeMain-image"
          src="./images/Home/home-mainimg2.png"
          alt="bedroom"
        />
      </div>
    </div>
  );
};

export default HomeMain;

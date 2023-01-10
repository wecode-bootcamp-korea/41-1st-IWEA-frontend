import React from 'react';
import { Link } from 'react-router-dom';
import './HomeEventCard.scss';

const HomeEventCard = () => {
  return (
    <div className="HomeEvent">
      <div className="HomeEvent-title">진행 중인 이벤트 및 프로모션</div>
      <div className="HomeEvent-card-container">
        <div className="card-box">
          {EVENT_LISTS?.map(item => {
            return (
              <div key={item.id} className="card-container">
                <img className="card-image" src={item.src} alt={item.alt} />
                <div className="card-content-wrap">
                  <div className="card-title">{item.title}</div>
                  <div className="card-content">{item.content}</div>
                  <Link to="/product?offset=1&limit=12">
                    <img className="card-arrow" src={item.arrow} alt="arrow" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="HomeEvent-container" />
    </div>
  );
};

export default HomeEventCard;

const EVENT_LISTS = [
  {
    id: 1,
    src: '../images/Home/home-event1.png',
    alt: 'EventImg1',
    title: 'IWEA 1월 13일, OPEN !',
    content:
      '여러분들의 공간을 개성있게, 스타일리쉬하게 꾸밀 수 있는 IWEA의 인테리어 아이템들을 만나보세요 !',
    arrow: '../images/Home/home-event-arrow.png',
  },
  {
    id: 2,
    src: '../images/Home/home-event2.png',
    alt: 'EventImg1',
    title: '내가 찾던 인테리어 솔루션',
    content:
      '집 전체를 바꾸든, 방하나를 꾸미든. 간단한 홈 스타일링을 원하든, 본격적인 리모델리을 원하든. 무엇을 기대하든 유연하게 딱 맞는 솔루션을 제공해주는 IWEA의 인테리어 디자인 서비스를 만나보세요.',
    arrow: '../images/Home/home-event-arrow.png',
  },
  {
    id: 3,
    src: '../images/Home/home-event3.png',
    alt: 'EventImg1',
    title: '개성있는 1인용 ITEM',
    content:
      '새해를 맞이해 집을 새단장하고 싶다면 내가 가장 많이 생활하는 공간에 꼭 맞는 아이템을 놓는 건 어때요? 폭신한 패브릭 소재와 분리 가능한 커버로 더 오래 사용할 수 있는 1인용 소파 제품들을 만나보세요',
    arrow: '../images/Home/home-event-arrow.png',
  },
];

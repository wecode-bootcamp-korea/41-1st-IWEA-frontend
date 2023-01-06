import React from 'react';
import './HomeEvent.scss';

const HomeEvent = () => {
  return (
    <div className="HomeEvent">
      <div className="HomeEvent-container">
        {EVENT_ITEM_LISTS?.map(item => (
          <div>
            <img src={item.src} alt={item.alt} />
            <div className="section-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeEvent;

export const EVENT_ITEM_LISTS = [
  {
    id: 1,
    src: './images/Home/home-category1.png',
    alt: 'Event1',
    text: '안녕하세요 우리의 이벤트를 즐겨보세요1',
  },
  {
    id: 2,
    src: './images/Home/home-category2.png',
    alt: 'Event2',
    text: '안녕하세요 우리의 이벤트를 즐겨보세요2',
  },
  {
    id: 3,
    src: './images/Home/home-category3.png',
    alt: 'Event3',
    text: '안녕하세요 우리의 이벤트를 즐겨보세요3',
  },
];

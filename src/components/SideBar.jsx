import React, { useState } from 'react';
import './SideBar.scss';

const SideBar = ({ setToggleMenu }) => {
  const [unmount, setUnmount] = useState(false);
  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 300);
  };
  return (
    <div className="sidebar">
      <div
        className={`sidebar-body${unmount ? ' sidebar-body-unmount' : ''}`}
        onClick={closeModal}
      >
        <div
          className={`sidebar-body-wrap ${
            unmount ? 'sidebar-body-wrap-unmount' : ''
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="sidebar-header">
            <div className="header-wrap">
              <div className="header-container">
                <div className="inner-main">
                  <div className="inner-menu-container">
                    <img
                      alt="close"
                      src="images/close.png"
                      className="close-icon"
                      onClick={closeModal}
                    />
                  </div>
                  <h1 className="logo">
                    <img
                      src="images/logo.png"
                      alt="close"
                      className="logo-img"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-body-container">
            <ul className="sidebar-list">
              <a href="#">
                <li>모든 제품</li>
              </a>
              <a href="#">
                <li>온라인 쇼룸</li>
              </a>
              <a href="#">
                <li>홈 액세서리</li>
              </a>
              <a href="#">
                <li>서비스</li>
              </a>
              <a href="#">
                <li>IWEA 특가</li>
              </a>
              <a href="#">
                <li>신제품</li>
              </a>
              <a href="#">
                <li>아이디어</li>
              </a>
              <a href="#">
                <li>새로운 소식</li>
              </a>
              <a href="#">
                <li>브랜드 캠페인</li>
              </a>
            </ul>
            <ul className="sidebar-info">
              <a href="#">
                <li>매장 안내</li>
              </a>
              <a href="#">
                <li>IWEA Family</li>
              </a>
              <a href="#">
                <li>IWEA for Business</li>
              </a>
              <a href="#">
                <li>IWEA Live</li>
              </a>
              <a href="#">
                <li>고객지원</li>
              </a>
              <a href="#">
                <li>배송조회</li>
              </a>
              <a href="#">
                <li>내 프로필</li>
              </a>
            </ul>
            <div className="sidebar-nav">
              <button className="sidebar-button">
                <span>한국어</span>
                <span class="material-symbols-outlined">expand_more</span>
              </button>
              <button className="sidebar-button">
                <span class="material-symbols-outlined">language</span>
                <span>국가 변경</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

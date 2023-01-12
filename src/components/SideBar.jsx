import React, { useState } from 'react';
import './SideBar.scss';

const SideBar = ({ setToggleMenu }) => {
  const [unmount, setUnmount] = useState(false);
  const closeMenu = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 200);
  };
  return (
    <div className="sidebar">
      <div
        className={`sidebar-body${unmount ? ' sidebar-body-unmount' : ''}`}
        onClick={closeMenu}
      >
        <div
          className={`sidebar-body-wrap ${
            unmount ? 'sidebar-body-wrap-unmount' : ''
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="sidebar-header">
            <div className="inner-main">
              <div className="inner-menu-container">
                <img
                  alt="close"
                  src="images/close.png"
                  className="close-icon"
                  onClick={closeMenu}
                />
              </div>
              <div className="logo">
                <img src="images/logo.png" alt="close" className="logo-img" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

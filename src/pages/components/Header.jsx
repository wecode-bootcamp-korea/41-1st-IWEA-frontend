import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-container">
          <div className="inner">
            <div className="inner-menu-container">
              <img alt="menu" src="images/menu.png" className="menu-icon" />
              <span className="font-size">메뉴</span>
            </div>
            <div className="inner-main">
              <h1 className="logo">
                <img
                  src="images/logo.png"
                  alt="instagram"
                  className="logo-img"
                />
                <input
                  type="search"
                  placeholder="검색어 입력"
                  className="search-input"
                ></input>
                <img
                  src="images/user.png"
                  alt="instagram"
                  className="user-img"
                />
                <img
                  src="images/cart.png"
                  alt="instagram"
                  className="cart-img"
                />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="nav-container">
          <div className="nav-inner">
            <div className="nav-inner-main">
              <nav className="nav-main">
                <ul className="nav-left-item">
                  <li>
                    <a href="#" className="nav-left-list-first">
                      모든 제품
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-left-list">
                      온라인 쇼룸
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-left-list">
                      홈 액세서리
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-left-list">
                      서비스
                    </a>
                  </li>
                </ul>
                <ul className="nav-right-item">
                  <li className="nav-right-list">
                    <img src="images/delivery.png" className="right-icon" />
                    <a href="#" className="nav-right-items">
                      우편 번호 입력
                    </a>
                  </li>
                  <li className="nav-right-list-margin">
                    <img src="images/store.png" className="right-icon" />
                    <a href="#" className="nav-right-items">
                      매장 선택
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

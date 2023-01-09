import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="inner">
          <div className="inner-menu-container">
            <img alt="menu" src="images/menu.png" className="menu-icon" />
            <span>메뉴</span>
          </div>
          <div className="inner-main">
            <div className="logo">
              <Link to="/">
                <img src="images/logo.png" alt="IWEA" className="logo-img" />
              </Link>
              <div className="search">
                <span class="material-symbols-outlined">search</span>
                <input
                  type="search"
                  placeholder="검색어 입력"
                  className="search-input"
                ></input>
              </div>
              <img src="images/user.png" alt="user" className="user-img" />
              <Link to="/login">
                <img src="images/enter.png" alt="login" className="login-img" />
              </Link>
              <Link to="/cart">
                <img src="images/cart.png" alt="cart" className="cart-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="nav-inner">
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
                <a href="#" className="nav-right-items">
                  우편 번호 입력
                </a>
              </li>
              <li className="nav-right-list">
                <a href="#" className="nav-right-items">
                  매장 선택
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './Header.scss';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import SideModal from './SideModal/SideModal';

const Header = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const openLeft = () => {
    setLeftOpen(true);
  };

  const openRight = () => {
    setRightOpen(true);
  };

  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch(`http://10.58.52.170:3000/carts`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(data => setCartList(data.data.cartList));
  }, []);

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="logo">
          <div className="inner-menu-container">
            <img
              alt="menu"
              src="images/menu.png"
              className="menu-icon"
              onClick={openLeft}
            />
            <span>메뉴</span>
          </div>
          <Link to="/">
            <img src="images/logo.png" alt="IWEA" className="logo-img" />
          </Link>
          <div className="search">
            <span className="material-symbols-outlined">search</span>
            <input
              type="search"
              placeholder="검색어 입력"
              className="search-input"
            />
          </div>
          <img
            src="images/user.png"
            alt="user"
            className="user-img"
            onClick={openRight}
          />
          <Link to="/login">
            <img src="images/enter.png" alt="login" className="login-img" />
          </Link>
          <Link to="/cart">
            <img src="images/cart.png" alt="cart" className="cart-img" />
          </Link>
          <button className="cart-count">{cartList?.length || 0}</button>
        </div>
      </div>
      <div className="nav-wrap">
        <nav className="nav-main">
          <ul className="nav-left-item">
            <li>
              <a href="#">모든 제품</a>
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
      {leftOpen && <SideBar setToggleMenu={setLeftOpen} />}
      {rightOpen && <SideModal setSideBarMenu={setRightOpen} />}
    </header>
  );
};

export default Header;

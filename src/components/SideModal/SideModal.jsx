import React, { useState, useEffect } from 'react';
import SideModalList from './component/SideModalInfo/SideModalInfo';
import SideModalInfo from './component/SideModalList/SideModalList';
import './SideModal.scss';

const SideModal = ({ setToggleMenu }) => {
  const [unmount, setUnmount] = useState(false);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    return window.localStorage.setItem(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImlhdCI6MTY3MzM5NDk5MH0.nejufPzJzN2PzV5ToZGIXHC9fP21skEhEk7Lp4ZwgFU'
    );
  }, []);
  useEffect(() => {
    fetch('http://10.58.52.241:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.data[0].korean_name);
        setModal(data.data);
        // console.log(data);
      });
  }, []);

  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 300);
  };

  return (
    <div className="sidemodal">
      <div
        className={`sidemodal-body${unmount ? ' sidemodal-body-unmount' : ''}`}
        onClick={closeModal}
      >
        <div
          className={`sidemodal-body-wrap ${
            unmount ? 'sidemodal-body-wrap-unmount' : ''
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="inner-menu-container">
            <img
              alt="close"
              src="/images/close.png"
              className="close-icon"
              onClick={closeModal}
            />
          </div>
          <div className="sidemodal-info-wrap">
            <SideModalInfo modal={modal} />
          </div>
          <div className="sidemodal-list-wrap">
            <SideModalList />
            <img
              className="iwea-logo"
              src="/images/SideModal/iwea-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideModal;

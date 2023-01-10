import React, { useState } from 'react';
import SideModalList from './component/SideModalInfo/SideModalInfo';
import SideModalInfo from './component/SideModalList/SideModalList';
import './SideModal.scss';

const SideModal = ({ setToggleModal }) => {
  const [unmount, setUnmount] = useState(false);
  const closeMenu = () => {
    setUnmount(true);
    setTimeout(() => {
      setToggleModal(false);
    }, 300);
  };
  return (
    <div className="sidemodal">
      <div
        className={`sidemodal-body${unmount ? ' sidemodal-body-unmount' : ''}`}
        onClick={closeMenu}
      >
        <div
          className={`sidemodal-body-wrap ${
            unmount ? 'sidemodal-body-wrap-unmount' : ''
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="sidemodal-list-wrap">
            <div className="header-wrap">
              <div className="header-container">
                <div className="inner">
                  <div className="inner-menu-container">
                    <img
                      alt="close"
                      src="images/close.png"
                      className="close-icon"
                      onClick={closeMenu}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sidemodal-info-wrap">
              <SideModalInfo />
            </div>
            <div className="sidemodal-list-wrap">
              <SideModalList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideModal;

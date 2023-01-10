import React, { useState } from 'react';
import SideModalList from './component/SideModalInfo/SideModalInfo';
import SideModalInfo from './component/SideModalList/SideModalList';
import './SideModal.scss';

const SideModal = ({ setToggleMenu }) => {
  const [unmount, setUnmount] = useState(false);

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
          <div className="sidemodal-list-wrap">
            <div className="inner-menu-container">
              <img
                alt="close"
                src="/images/close.png"
                className="close-icon"
                onClick={closeModal}
              />
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

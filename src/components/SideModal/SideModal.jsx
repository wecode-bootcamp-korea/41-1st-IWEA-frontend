import React, { useState, useEffect } from 'react';
import SideModalList from './component/SideModalList/SideModalList';
import SideModalInfo from './component/SideModalInfo/SideModalInfo';
import './SideModal.scss';

const SideModal = ({ setSideBarMenu }) => {
  const [unmount, setUnmount] = useState(false);
  const [modal, setModal] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.56:3000/userInfo', {
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
        setModal(data.data);
      });
  }, []);

  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setSideBarMenu(false);
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
            <div className="inner-modal-container">
              <img
                alt="close"
                src="/images/close.png"
                className="close-icon"
                onClick={closeModal}
              />
            </div>
            {modal.name && modal.points ? (
              <div className="sidemodal-info-wrap">
                <SideModalInfo
                  modalName={modal.name}
                  modalPoints={modal.points}
                />
              </div>
            ) : (
              <>''</>
            )}
            <div className="sidemodal-list-wrap">
              <SideModalList />
              <img src="/images/logo.png" alt="iwea 로고" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideModal;

import React, { useEffect, useState } from 'react';
import './Cart.scss';

// 상수데이터를 통한 렌더링 + map
// mockData - useEffect, fetch -> setCarts(data)
// server fetch('/data/tart.json') -> fetch('10.~~~~:3000/carts')
function Cart() {
  console.log(1);
  const [carts, setCarts] = useState([]);
  console.log(2);
  const [name, setName] = useState('우성');
  console.log(3);

  // 초기 렌더링이 끝난 이후에만 실행되는 공간 -> 빈 배열
  useEffect(() => {
    console.log(4);
    fetch('/data/cart.json')
      .then(response => response.json())
      .then(result => {
        console.log(5);
        setCarts(result);
        console.log(6);
      });
    console.log(7);
  }, []);

  console.log(8);

  const changeName = () => {
    console.log(9);
    setName('흥민');
  };

  console.log(10);

  return (
    <div className="cart-container">
      <h1 onClick={changeName}>{name}</h1>
      <div className="basket">
        <div className="top-left">
          <h1 className="basket-first">장바구니</h1>
          <div>
            <img
              className="three-spots"
              src="images/three-spots.png"
              alt="점세개"
            />
          </div>
        </div>
        <div className="basket-second">주문을 어떻게 받고 싶으세요?</div>
        <div className="delivery">
          <div className="delivery-first">
            <div className="delivery-second">
              <img className="truck" src="/images/truck.png" alt="배송" />
              <div className="delivery-third">배송</div>
            </div>
          </div>
          <div className="delivery-first">
            <div className="pickup-second">
              <img className="pickup" src="/images/pickup.png" alt="픽업" />
              <div className="pickup-third">픽업</div>
            </div>
          </div>
        </div>
        {carts.map(item => {
          return (
            <div className="first-firniture" key={item.id}>
              <div>
                <img className="furniture" src={item.picture} alt="가구" />
              </div>
              <div className="vangstaFirst">
                <p className="vangsta">
                  <b>{item.name}</b>
                </p>
                <p className="extendTable">{item.detail}</p>
                <p>{item.length}</p>
                <div className="button">
                  <select className="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <span className="delete">삭제</span>
                </div>
              </div>
              <div className="money">
                <b>{item.price}</b>
              </div>
            </div>
          );
        })}

        <div className="service">
          <div className="addService">조립서비스를 추가하시겠습니까?</div>
          <div className="addService-second">
            <p className="composeService">
              <img className="tool" src="images/tool.png" alt="도구" />
              조립 서비스
            </p>
            <p className="saveTime">
              IWEA에게 조립을 맞기고 소중한 시간을 아끼세요. 공식 협력업체가
              제공하는 조립 서비스는 ₩30,000부터 시작합니다.
            </p>
            <p className="postCode">
              우편 번호를 추가하여 예약 가능 여부 및 가격 확인
            </p>
            <div>
              <p className="addInformation">추가 정보</p>
            </div>
            <button className="choose">조립 서비스 선택하기</button>
          </div>
        </div>
      </div>
      <div className="order">
        <div>
          <div className="rightTop">
            <div className="firstTop">주문내역</div>
            <div className="secondTop">
              <span>배송</span>
              <span>아직 배송비가 산정되지 않았습니다</span>
            </div>
            <hr className="hr" />
            <div className="thirdTop">
              <span>총 주문금액</span>
              <span>₩ 129,000</span>
            </div>
          </div>

          <div className="couponFirst">
            <button className="couponEnter">
              <img className="coupon" src="images/coupon.png" alt="티켓" />
              <span className="couponGo">쿠폰 입력</span>
              <img
                className="arrowDown"
                src="images/arrowDown.png"
                alt="아래화살표"
              />
            </button>
          </div>
          <div>
            <button className="happyButton" type="button">
              <div className="payFirst">
                <span className="pay">결제하기</span>
                <img
                  className="arrowCute"
                  src="images/arrowCute.png"
                  alt="오른쪽화살표"
                />
              </div>
            </button>
          </div>
          <div className="rightDown">
            <img className="love" src="images/love.png" alt="하트" />
            반품 정책 365일 이내에 제품 환불 가능
          </div>
          <div className="rightDown-second">
            <img className="lock" src="images/lock.png" alt="자물쇠" />
            SSL 데이터 암호화로 안전한 쇼핑
          </div>
        </div>
      </div>
    </div>
  );
}

// const CART_ITEMS = [
//   {
//     id: 1,
//     name: 'VANGSTA 방스타',
//     detail: '확장형테이블, 블랙/다크브라운',
//     length: '80/120x70 cm',
//     price: 129000,
//     picture: '/images/furniture.avif',
//   },
//   {
//     id: 2,
//     name: 'TEODORES 테오도레스',
//     detail: '의자, 블랙',
//     length: '',
//     price: 34900,
//     picture: '/images/TEODORES.png',
//   },
//   {
//     id: 3,
//     name: 'NISSE 니세',
//     detail: '접이식의자, 블랙',
//     length: '',
//     price: 19900,
//     picture: '/images/NISSE.jpg',
//   },
// ];

export default Cart;

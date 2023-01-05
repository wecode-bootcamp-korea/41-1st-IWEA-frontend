import React from 'react';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart-container">
      <div className="top-left-first">
        <div className="top-left">
          <div>장바구니</div>
          <div>
            <img
              className="three-spots"
              src="images/three-spots.png"
              alt="점세개"
            ></img>
          </div>
        </div>
        <div>주문을 어떻게 받고 싶으세요?</div>
        <div className="delivery">
          <div>배송</div>
          <div>픽업</div>
        </div>
        <div className="first-firniture">
          <div>
            <img
              className="furniture"
              src="images/furniture.avif"
              alt="가구"
            ></img>
          </div>
          <div>
            <p>
              <b>VANGSTA</b>
            </p>
            <p>확장형테이블, 블랙/다크브라운</p>
            <p>80/120x70 cm</p>
          </div>
          <div>₩ 129,000</div>
        </div>
        <div>
          <div>조립서비스를 추가하시겠습니까?</div>
          <div>
            <div>조립 서비스</div>
            <p>
              IWEA에게 조립을 맞기고 소중한 시간을 아끼세요. 공식 협력업체가
              제공하는 조립 서비스는 ₩30,000부터 시작합니다.
            </p>
            <p>우편 번호를 추가하여 예약 가능 여부 및 가격 확인</p>
            <p>
              <u>추가 정보</u>
            </p>
            <span>조립 서비스 선택하기</span>
          </div>
        </div>
      </div>
      <div className="right-first">
        <div>
          <div>주문내역</div>
          <div>
            <div>배송</div>
            <div>아직 배송비가 산정되지 않았습니다.</div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Cart;

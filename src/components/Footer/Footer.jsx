import React from 'react';
import './Footer.scss';

function Parent() {
  return (
    <footer className="container">
      <div className="container_first">
        <div>
          <div className="family_box">
            <h3>IWEA Family</h3>
            <p className="free_join">
              지금 IKEA Family에 무료로 가입하고
              <br /> 다양한 멤버 전용 혜택을누리세요.
            </p>
            <div className="look">
              <a href="#;">자세히 보기</a>
            </div>
            <button className="join_button">IWEA Family 가입하기</button>
          </div>

          <div className="family_box">
            <h3>IWEA Business Network</h3>
            <p className="business">
              여러분의 더 나은 비즈니스 환경을 위한
              <br /> 다양한 혜택들을 받으세요
            </p>
            <div className="look">
              <a href="#;">자세히 보기</a>
            </div>
            <button className="join_button join_button_second">
              IWEA Business Network 가입하기
            </button>
          </div>
        </div>
        <div>
          <p>
            <b>고객문의</b>
          </p>
          <div>
            {MENU_LIST.map(menuList => {
              return <p key={menuList.id}>{menuList.menuName}</p>;
            })}
          </div>
        </div>
        <div>
          <p>
            <b>쇼핑하기</b>
          </p>
          <div>
            {MENU_LIST_SECOND.map(menuList => {
              return <p key={menuList.id}>{menuList.menuName}</p>;
            })}
          </div>
        </div>
        <div>
          <p>
            <b>서비스</b>
          </p>
          <div>
            {MENU_LIST_THIRD.map(menuList => {
              return <p key={menuList.id}>{menuList.menuName}</p>;
            })}
          </div>
        </div>
        <div>
          <p>
            <b>IWEA 이야기</b>
          </p>
          <div>
            {MENU_LIST_FOURTH.map(menuList => {
              return <p key={menuList.id}>{menuList.menuName}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="container_icon">
        <div className="icon">
          <span className="sns">
            <img src="/images/facebook.png" alt="페이스북" />
          </span>

          <span className="sns">
            <img src="/images/instagram.png" alt="인스타그램" />
          </span>

          <span className="sns">
            <img src="/images/youtube.jpg" alt="유투브" />
          </span>

          <span className="sns">
            <img className="kakao" src="/images/kt.png" alt="카카오톡" />
          </span>
        </div>

        <div className="logo">
          <button className="country_change">
            <img className="world" src="/images/world.png" alt="지구" />
            <span>국가 변경</span>
          </button>
          <button className="language_button">
            <span className="korean">한국어</span>
            <img className="arrow" src="/images/arrow.png" alt="화살표" />
          </button>
        </div>
      </div>
      <div className="bottom-row">
        <div className="inter">
          <p>© Inter IWEA Systems B.V 1999~2023</p>
        </div>
        <div className="bottom-right">
          <ul className="bottom-right-list">
            <li className="bottom-list-item">개인정보처리방침</li>
            <li className="bottom-list-item">쿠키 정책</li>
            <li className="bottom-list-item">쿠키 설정</li>
            <li className="bottom-list-item">웹사이트 이용약관</li>
            <li className="bottom-list-item">Responsible disclosure</li>
          </ul>
        </div>
      </div>
      <div className="bottom_first">
        <div className="bottom_of_bottom">
          <p className="bottom_second">IWEA 코리아</p>
          <p>주소 : 서울특별시 강남구 삼성동 143-40 위워크타워 1층</p>
          <p>
            사업자 등록번호: 123-45-67890 <u>사업자정보확인</u>
          </p>
          <p>대표자 : 송은우</p>
          <p>통신판매업 신고:1234-경기광명-5678</p>
          <p>TEL:1234-5678</p>
        </div>
      </div>
    </footer>
  );
}

export default Parent;

export const MENU_LIST = [
  { id: 1, menuName: '고객지원' },
  { id: 2, menuName: '자주 묻는 질문' },
  { id: 3, menuName: '문의하기' },
  { id: 4, menuName: '배송조회' },
  { id: 5, menuName: '교환환불' },
  { id: 6, menuName: '품질보증' },
  { id: 7, menuName: '제품리콜' },
  { id: 8, menuName: '피드백' },
  { id: 9, menuName: '부품 신청' },
];

export const MENU_LIST_SECOND = [
  { id: 1, menuName: '쇼핑하기' },
  { id: 2, menuName: '헤이오더' },
  { id: 3, menuName: 'IWEA for Business' },
  { id: 4, menuName: '셀프 플래닝' },
  { id: 5, menuName: 'IWEA 모바일 앱' },
  { id: 6, menuName: '제품 사용 팁/가이드' },
  { id: 7, menuName: '제품 구매 가이드' },
  { id: 8, menuName: '브로슈어' },
  { id: 9, menuName: '결제 옵션' },
  { id: 10, menuName: '기프트 카드' },
];

export const MENU_LIST_THIRD = [
  { id: 1, menuName: 'IWEA 서비스' },
  { id: 2, menuName: '배송 서비스' },
  { id: 3, menuName: '조립 서비스' },
  { id: 4, menuName: '설치 서비스' },
  { id: 5, menuName: '주방 서비스' },
  { id: 6, menuName: '구매상담 서비스' },
  { id: 7, menuName: '인테리어 디자인 서비스' },
  { id: 8, menuName: '바이백 서비스' },
];

export const MENU_LIST_FOURTH = [
  { id: 1, menuName: '브랜드 소개' },
  { id: 2, menuName: '집에서의 삶' },
  { id: 3, menuName: '지속가능한 생활' },
  { id: 4, menuName: '내가 아끼는 집,나를 아끼는 집' },
  { id: 5, menuName: '뉴스룸' },
  { id: 6, menuName: '채용정보' },
];

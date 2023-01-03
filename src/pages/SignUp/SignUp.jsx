import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPw] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  console.log(name);

  const handleSignUp = e => {
    e.preventDefault();

    fetch('http://10.58.52.73:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
      }),
    }).then(res => console.log(res));
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // });
  };

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  function handlePhoneNumberInput(event) {
    setPhoneNumber(event.target.value);
  }

  function handleAddressInput(event) {
    setAddress(event.target.value);
  }

  return (
    <div className="SignUp">
      <div className="signup-wrap">
        <div className="signup-left">
          <div className="signup-left-inner">
            <div className="signup-header">
              <img
                src="images/arrow.png"
                alt="arrow"
                className="signup-arrow"
              />
              <img
                src="images/loginIWEA.png"
                alt="IWEA"
                className="signup-logo"
              />
            </div>
            <div className="signup-main">
              <h1 className="signup-title">
                <span>회원가입</span>
              </h1>
              <div className="signup-description">
                <span>이미 가입하셨나요?</span>
                <a href="#" className="link">
                  로그인 하기
                </a>
              </div>
              <div className="signup-imgbox">
                <div className="signup-img1">
                  <img src="images/signup-grid1.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img2">
                  <img src="images/signup-grid2.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img3">
                  <img src="images/signup-grid3.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img4">
                  <img src="images/signup-grid4.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img5">
                  <img src="images/signup-grid5.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img6">
                  <img src="images/signup-grid6.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img7">
                  <img src="images/signup-grid7.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img8">
                  <img src="images/signup-grid8.jpg" alt="IWEA-IMG" />
                </div>
                <div className="signup-img9"></div>
                <div className="signup-img10">
                  <img src="images/signup-grid9.jpg" alt="IWEA-IMG" />
                </div>
              </div>
            </div>
            <div className="space"></div>
            <div className="signup-footer">
              <div className="signup-footer-inner">
                <div className="signup-footer-description">
                  <span>IWEA.kr - </span>
                  <a target="_blank" href="#" className="signup-cookie">
                    쿠키 정책
                  </a>
                  <span> , </span>
                  <a target="_blank" href="#" className="signup-personal">
                    개인정보처리방침
                  </a>
                </div>
                <div className="signup-footer-since">
                  © Inter IWEA Systems B.V. 1999-2023
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-right">
          <div className="signup-right-inner">
            <p className="signup-welcome">IWEA에 가입하시겠어요?</p>
            <form className="form">
              <div className="form-inner">
                <span className="name-title">이름</span>
                <input
                  id="name"
                  type="text"
                  className="input-box"
                  onChange={handleNameInput}
                ></input>
                <div className="space"></div>
                <span className="name-title">이메일</span>
                <input
                  id="email"
                  type="text"
                  className="input-box"
                  onChange={handleEmailInput}
                ></input>
                <div className="space"></div>
                <span className="name-title">비밀번호</span>
                <input
                  id="password"
                  type="password"
                  className="input-box"
                  onChange={handlePwInput}
                ></input>
                <div className="space"></div>
                <span className="name-title">휴대폰</span>
                <input
                  id="phone"
                  type="text"
                  className="input-box"
                  onChange={handlePhoneNumberInput}
                ></input>
                <div className="space"></div>
                <button class="address-button">우편번호 찾기</button>
                <div className="space"></div>
                <span className="name-title">주소</span>
                <input
                  id="address"
                  type="text"
                  className="input-box"
                  onChange={handleAddressInput}
                ></input>
                <div className="space"></div>
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox"></input>
                  <div className="input-description">
                    마케팅 수신 동의를 통해 IKEA의 홈퍼니싱 아이디어와 신상품
                    소식, 그리고 할인 혜택 정보를 받고 싶어요!
                  </div>
                </div>
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox"></input>
                  <div>
                    (필수) 약관을 모두 읽고 동의합니다.
                    <a target="_blank" href="#" class="link">
                      이용약관
                    </a>
                    .
                  </div>
                </div>
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox"></input>
                  <div>
                    (필수) 개인정보 수집ㆍ이용에 동의합니다.{' '}
                    <a target="_blank" href="#" class="link">
                      개인정보 수집ㆍ이용 동의
                    </a>
                    .
                  </div>
                </div>
                <div className="space"></div>
                <button
                  className="signup-button"
                  onClick={handleSignUp}
                  disabled={
                    email.includes('@') &&
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
                      password
                    )
                      ? false
                      : true
                  }
                >
                  회원 가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

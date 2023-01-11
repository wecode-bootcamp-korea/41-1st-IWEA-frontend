import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LEFT_IMAGES } from './SignUp_data';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const { name, email, password, phoneNumber, address } = inputValues;

  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const phonenumberReg = /^(010)-?([0-9]{4})-?([0-9]{4})$/;
  const isEmailValid = emailReg.test(email);
  const isPasswordValid = passwordReg.test(password);
  const isPhoneNumberValid = phonenumberReg.test(phoneNumber);
  const signupValid = isEmailValid && isPasswordValid && isPhoneNumberValid;

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
    })
      .then(response => response.json())
      .then(data => {
        alert('회원가입에 성공했습니다');
        navigate('/');
      });
  };

  const handleInput = event => {
    const { id, value } = event.target;
    setInputValues({ ...inputValues, [id]: value });
  };

  return (
    <div className="SignUp">
      <div className="signup-wrap">
        <div className="signup-left">
          <div className="signup-left-inner">
            <div className="signup-header">
              <div className="arrow-block">
                <Link to="/login">
                  <img
                    src="images/arrowToLogin.png"
                    alt="arrow"
                    className="signup-arrow"
                  />
                </Link>
              </div>
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
                {LEFT_IMAGES.map(info => (
                  <div className={info.className}>
                    <img src={info.src} alt="info" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space" />
            <div className="signup-footer">
              <div className="signup-footer-inner">
                <div className="signup-footer-description">
                  <span>IWEA.kr - </span>
                  <a target="_blank" href="#" className="link">
                    쿠키 정책
                  </a>
                  <span> , </span>
                  <a target="_blank" href="#" className="link">
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
                  onChange={handleInput}
                />
                <div className="space" />
                <span className="name-title">이메일</span>
                <input
                  id="email"
                  type="text"
                  className="input-box"
                  onChange={handleInput}
                />
                {email.length === 0 || isEmailValid || (
                  <div className="input-demand signup-right-font">
                    이메일 형식이 아닙니다.
                  </div>
                )}
                <div className="space" />
                <span className="name-title">비밀번호</span>
                <input
                  id="password"
                  type="password"
                  className="input-box"
                  onChange={handleInput}
                />
                {password.length === 0 || isPasswordValid || (
                  <div className="input-demand signup-right-font">
                    비밀번호는 8자 이상, 영문자,숫자,특수문자 포함입니다.
                  </div>
                )}
                <div className="space" />
                <span className="name-title">휴대폰</span>
                <input
                  id="phoneNumber"
                  type="text"
                  className="input-box"
                  onChange={handleInput}
                />
                {phoneNumber.length === 0 || isPhoneNumberValid ? (
                  <div className="input-demand-phone signup-right-font">
                    010-1234-5678 or 01012345678
                  </div>
                ) : (
                  <div className="input-demand signup-right-font">
                    휴대폰 번호가 올바르지 않습니다.
                  </div>
                )}
                <div className="space" />
                <button class="address-button">우편번호 찾기</button>
                <div className="space" />
                <span className="name-title">주소</span>
                <input
                  id="address"
                  type="text"
                  className="input-box"
                  onChange={handleInput}
                />
                <div className="space" />
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox" />
                  <div className="input-description">
                    마케팅 수신 동의를 통해 IKEA의 홈퍼니싱 아이디어와 신상품
                    소식, 그리고 할인 혜택 정보를 받고 싶어요!
                  </div>
                </div>
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox" />
                  <div>
                    (필수) 약관을 모두 읽고 동의합니다.
                    <a target="_blank" href="#" class="link">
                      이용약관
                    </a>
                    .
                  </div>
                </div>
                <div class="checkbox">
                  <input type="checkbox" className="input-checkbox" />
                  <div>
                    (필수) 개인정보 수집ㆍ이용에 동의합니다.
                    <a target="_blank" href="#" class="link">
                      개인정보 수집ㆍ이용 동의
                    </a>
                    .
                  </div>
                </div>
                <div className="space" />
                <button
                  className="signup-button"
                  onClick={handleSignUp}
                  disabled={!signupValid}
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

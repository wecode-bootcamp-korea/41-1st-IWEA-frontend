import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="Login">
      <div className="login-wrap">
        <div className="login-left">
          <div className="login-left-inner">
            <div className="login-header">
              <img src="images/arrow.png" alt="arrow" className="login-arrow" />
              <img
                src="images/loginIWEA.png"
                alt="IWEA"
                className="login-logo"
              />
            </div>
            <div className="login-main">
              <h1 className="login-title">
                <span>로그인</span>
              </h1>
              <p className="login-description">
                외워야 할 비밀번호가 많아 불편하셨죠?
                <br />
                이제 일회용 코드를 이용하여 간편하게 로그인하세요.
                <br />
                <br />* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
              </p>
            </div>
            <div className="login-footer">
              <div className="login-footer-inner">
                <div className="login-footer-description">
                  <span>IWEA.kr - </span>
                  <a target="_blank" href="#" className="login-cookie">
                    쿠키 정책
                  </a>
                  <span> , </span>
                  <a target="_blank" href="#" className="login-personal">
                    개인정보처리방침
                  </a>
                </div>
                <div className="login-footer-since">
                  © Inter IWEA Systems B.V. 1999-2023
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-right-inner">
            <form className="form">
              <div className="form-inner">
                <span>이메일 또는 확인된 휴대폰 번호</span>
                <input type="text" id="username"></input>
                <span className="login-option">
                  다른 로그인 옵션: 일회용 코드로 로그인
                </span>
                <div className="email-space"></div>
                <span class="password-name">비밀번호</span>
                <input type="password" id="password"></input>
                <span>비밀번호 찾기</span>
                <div className="password-space-down"></div>
                <div className="login-status">
                  <input type="checkbox" className="login-checkbox"></input>
                  <span className="login-checkbox-label">로그인 상태 유지</span>
                  <img
                    src="images/alert.png"
                    alt="alert"
                    className="login-alert"
                  />
                </div>
                <div className="login-space-up"></div>
                <button class="login-button">로그인</button>
              </div>
            </form>
            <div className="footer-space-up"></div>
            <div className="login-right-footer">
              <div className="right-footer-inner">
                <span>IWEA 계정이 없으신가요? 지금 바로 만들어보세요.</span>
                <div className="footer-space"></div>
                <button>개인 회원 가입하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

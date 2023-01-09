import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValues;

  const navigate = useNavigate();

  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const isEmailValid = emailReg.test(email);
  const isPasswordValid = passwordReg.test(password);

  const handleLogin = e => {
    e.preventDefault();
    fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인에 성공했습니다');
        navigate('/');
      });
  };

  const handleInput = event => {
    const { id, value } = event.target;
    setInputValues({ ...inputValues, [id]: value });
  };

  return (
    <div className="Login">
      <div className="login-wrap">
        <div className="login-left">
          <div className="login-left-inner">
            <div className="login-header">
              <div className="arrow-block">
                <Link to="/">
                  <img
                    src="images/arrow.png"
                    alt="arrow"
                    className="login-arrow"
                  />
                </Link>
              </div>
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
                  <span>IWEA.kr</span>
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
                <span className="login-right-font">이메일</span>
                <input
                  type="text"
                  id="email"
                  className="login-input-size"
                  onChange={handleInput}
                />
                {email.length === 0 || isEmailValid || (
                  <div className="email-input-demand login-right-font">
                    이메일 형식이 아닙니다.
                  </div>
                )}
                <div className="email-space" />
                <span class="password-name login-right-font">비밀번호</span>
                <input
                  type="password"
                  id="password"
                  className="login-input-size"
                  onChange={handleInput}
                />
                {password.length === 0 || isPasswordValid || (
                  <div className="email-input-demand login-right-font">
                    비밀번호는 8자 이상, 영문자,숫자,특수문자 포함입니다.
                  </div>
                )}
                <span className="login-right-font link">비밀번호 찾기</span>
                <div className="password-space-down" />
                <div className="login-status">
                  <div className="login-status-box">
                    <input type="checkbox" className="login-checkbox" />
                    <div className="login-checkbox-label login-right-font">
                      로그인 상태 유지
                    </div>
                  </div>
                  <img
                    src="images/alert.png"
                    alt="alert"
                    className="login-alert"
                  />
                </div>
                <div className="login-space-up" />
                <button
                  type="button"
                  class="login-button login-right-font"
                  onClick={handleLogin}
                  disabled={!(isEmailValid && isPasswordValid)}
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="footer-space-up" />
            <div className="login-right-footer">
              <div className="right-footer-inner">
                <span className="login-right-font login-footer-make">
                  IWEA 계정이 없으신가요? 지금 바로 만들어보세요.
                </span>
                <div className="footer-space" />
                <button className="login-signup login-right-font">
                  <Link to="/signup">개인 회원 가입하기</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginOthers from '../login-others/login-others';

const LoginNew = (props) => {

  const history = useHistory();

  const handelCancel = () => {
    history.push('/login');
  }

  return (
    <main className="login-new">
      <h1>회원가입</h1>

      <LoginOthers text={'SNS 계정으로 간편 회원가입'} />

      <form className="login-new-form" action="" method="POST">
        <div className="form-input">
          <label htmlFor="ID">아이디</label>
          <input type="text" id="ID" placeholder="ID" required/>
        </div>

        <div className="form-input">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" placeholder="비밀번호" minLength="4" required/>
        </div>

        <div className="form-input">
          <label htmlFor="password">비밀번호 확인</label>
          <input type="password" id="password" placeholder="비밀번호 확인" minLength="4" required/>
        </div>

        <div className="form-input">
          <label htmlFor="phone">휴대폰 번호</label>
          <input type="tel" id="phone"  placeholder="010-0000-0000" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required />
        </div>

        <div className="form-input">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일"  required/>
        </div>

        <div className="button-container">
          <button className="submit-button" type="submit">회원가입</button>
          <button onClick={handelCancel} className="cancel-button" type="button">취소</button>
        </div>
      </form>

    </main>
  )
}

export default LoginNew;
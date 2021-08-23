import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginOthers from '../login-others/login-others';

const Login = (props) => {

  const history = useHistory();

  const MoveToHome = () => {
    history.push('/');
  }

  return (
    <main className="login">
      <h1 onClick={MoveToHome} className="login-title" >청청과점</h1>

      <form className="login-form" action="" method="GET">
        <div className="form-inputs">
          <input type="text" placeholder="아이디"/>
          <input type="password" placeholder="비밀번호" />
        </div>

        <div className="login-form-buttons">
          <button className="login-button">로그인</button>
          <button className="join-button">회원가입</button>
        </div>
      </form>

      <LoginOthers text={'SNS 계정으로 간편 로그인/회원가입'}/>
    </main>
  )
}

export default Login;
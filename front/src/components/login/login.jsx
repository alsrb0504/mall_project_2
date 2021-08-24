import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import LoginOthers from '../login-others/login-others';



const Login = ({auth}) => {

  const history = useHistory();

  const IDRef = useRef();
  const passwordRef = useRef();

  const MoveToHome = () => {
    history.push('/');
  }

  const MoveToJoin = () => {
    history.push('/login/join')
  }
  
  const handleLogin = (e) => {
    e.preventDefault();

    const login_info = {
      id: IDRef.current.value,
      password: passwordRef.current.value,
    }
    
    const login_result = auth.Login(login_info);

    if(login_result) {
      console.log('로그인 성공', login_result);
      history.push('/');

      console.log(auth.cur_user);

      // history.push({
      //   pathname: '/',
      //   state: {
      //     user: login_result.id,
      //   }
      // })

    } else {
      alert('ID 또는 비밀번호를 확인하세요!!');
      IDRef.current.value ="";
      passwordRef.current.value ="";
    }
  }

  return (
    <main className="login">
      <h1 onClick={MoveToHome} className="login-title" >청청과점</h1>

      <form className="login-form" action="" method="GET">
        <div className="form-inputs">
          <input ref={IDRef} type="text" placeholder="아이디" required />
          <input ref={passwordRef} type="password" placeholder="비밀번호" required />
        </div>

        <div className="login-form-buttons">
          <button 
            onClick={handleLogin}
            className="login-button"
            type="submit" 
          >
            로그인
          </button>
          <button onClick={MoveToJoin} className="join-button">회원가입</button>
        </div>
      </form>

      <LoginOthers text={'SNS 계정으로 간편 로그인/회원가입'}/>
    </main>
  )
}

export default Login;
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import LoginOthers from '../login-others/login-others';

const LoginNew = (props) => {

  const history = useHistory();

  const idRef = useRef();
  const firstPassRef = useRef();
  const secondPassRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleCheck = (e) => {
    
    if(firstPassRef.current.value !== secondPassRef.current.value) {
      console.log("error");
      alert('비밀번호가 일치하지 않습니다!!');
      return;
    }
    
    const new_user = {
      id: idRef.current.value,
      password: firstPassRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    }

    
    // console.log(new_user);
    // 새로운 유저 생성,
    // 나중에 서버와 연결

    e.preventDefault();
    // push로 
    alert('회원가입이 완료되었습니다!!')
    history.push('/login');

  }

  const MoveToLogin = () => {
    history.push('/login');
  }

  return (
    <main className="login-new">
      <h1>회원가입</h1>

      <LoginOthers text={'SNS 계정으로 간편 회원가입'} />

      <form className="login-new-form" action="" method="POST">
        <div className="form-input">
          <label htmlFor="ID">아이디</label>
          <input 
            ref={idRef}
            type="text" 
            id="ID" 
            placeholder="ID" 
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">비밀번호</label>
          <input 
            ref={firstPassRef}
            type="password" 
            id="password-first" 
            placeholder="비밀번호" 
            minLength="4" 
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="password">비밀번호 확인</label>
          <input 
            ref={secondPassRef}
            type="password" 
            id="password-second" 
            placeholder="비밀번호 확인" 
            minLength="4" 
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="phone">휴대폰 번호</label>
          <input 
            ref={phoneRef}
            type="tel" 
            id="phone" 
            placeholder="010-0000-0000" 
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" 
            required 
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">이메일</label>
          <input 
            ref={emailRef}
            type="email" 
            id="email" 
            placeholder="이메일" 
            required
          />
        </div>

        <div className="button-container">
          <button onClick={handleCheck} className="submit-button" type="submit">회원가입</button>
          <button onClick={MoveToLogin} className="cancel-button" type="button">취소</button>
        </div>
      </form>

    </main>
  )
}

export default LoginNew;
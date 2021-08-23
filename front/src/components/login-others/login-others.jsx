import React from 'react';

const LoginOthers = ({text}) => {
  
  return (
    <section className="login-others">
        <h4>{text}</h4>
        <div className="others-list">
          <a href='/login' className="others-item"><img src="/logo/facebook.svg" alt="facebook_icon" /></a>
          <a href='/login' className="others-item"><img src="/logo/kakao.svg" alt="kakao_icon" /></a>
          <a href='/login' className="others-item"><img src="/logo/naver.svg" alt="naver_icon" /></a>
        </div>
      </section>
  )
}

export default LoginOthers;
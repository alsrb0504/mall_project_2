import React from 'react';

const Login = (props) => {


  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">

            <main className="login">
              <h1 className="login-title" >청청과점</h1>

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

              <section className="login-others">
                <h4>SNS 계정으로 간편 로그인/회원가입</h4>
                <div className="others-list">
                  <a href='/login' className="others-item"><img src="/logo/facebook.svg" alt="facebook_icon" /></a>
                  <a href='/login' className="others-item"><img src="/logo/kakao.svg" alt="kakao_icon" /></a>
                  <a href='/login' className="others-item"><img src="/logo/naver.svg" alt="naver_icon" /></a>
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>

    </div>

    
  )
}

export default Login;
import React from 'react';

const Login = (props) => {


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <main>
            <h1 className="visually-hidden" aria-label="로그인 창">로그인 페이지</h1>

            <form action="" method="GET">
              <div>
                <input type="text" />
                <input type="text" />
              </div>

              <div>
                <button>로그인</button>
                <button>회원가입</button>
              </div>

              <ul>
                <li><img src="/logo/facebook.svg" alt="facebook_icon" /></li>
                <li><img src="/logo/kakao.svg" alt="kakao_icon" /></li>
                <li><img src="/logo/naver.svg" alt="naver_icon" /></li>
              </ul>
            </form>

          </main>

        </div>
      </div>
    </div>
  )
}

export default Login;
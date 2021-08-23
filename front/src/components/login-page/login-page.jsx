import React from 'react';
import LoginNew from '../login-new/login-new';
import Login from '../login/login';


const LoginPage = (props) => {

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">

            {/* <Login /> */}

            <LoginNew />

          </div>
        </div>
      </div>

    </div>

    
  )
}

export default LoginPage;
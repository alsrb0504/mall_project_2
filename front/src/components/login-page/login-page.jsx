import React from 'react';
import LoginNew from '../login-new/login-new';
import Login from '../login/login';

const LoginPage = ({join, auth}) => {

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {
              !join && <Login auth={auth}/>
            }
            {
              join && <LoginNew auth={auth}/>
            }
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default LoginPage;
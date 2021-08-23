import React, { useState } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import LoginNew from '../login-new/login-new';
import Login from '../login/login';
import { Route } from 'react-router';

const LoginPage = ({join}) => {


  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {
              !join && <Login />
            }
            {
              join && <LoginNew />
            }
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default LoginPage;
import React, { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useLocation } from 'react-router-dom';


const Header = memo(({auth}) => {

  // const [ loginState, setLoginState ] = useState(login_state);

  const location = useLocation();
  const history = useHistory();

  const MoveLogin = () => {
    history.push('/login');
  }

  const MoveBoard = () => {
    history.push('/board');
  }

  const Active = () => {
    if(location.pathname.includes('/board')) {
      return (
        <>
          <li className="header-nav-item">
            <Link to="/">제품 소개</Link>
          </li>
          <li className="header-nav-item is-active">
            <Link to="/board" >문의 게시판</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="header-nav-item is-active">
            <Link to="/">제품 소개</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/board" >문의 게시판</Link>
          </li>
        </>
      )
    }
  }

  const handleLogout = () => {
    auth.Logout();
  }
  return(
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              
              <div className="header">
                {/* 모바일 */}
                {/* 아이콘 로그인 버튼으로 수정 */}
                <button onClick={MoveBoard} className="icon-button sm-only ">
                  <FontAwesomeIcon icon={faClipboardList} className="ic-bar" />
                </button>
                
                <h1 className="header-title" >
                  <Link to="/">
                    청청과점
                  </Link>
                </h1>
                
                <nav className="header-nav sm-hidden">
                  <h1 className="visually-hidden">헤더 nav</h1> 

                  <ul className="header-nav-list" >
                    {
                      Active()
                    }

                    
                    <li className="header-nav-item">
                    {
                      !auth.cur_user &&
                      <Link to='/login'>
                        <button className="login-button" type="button">로그인</button>
                      </Link>
                    }
                    {
                      auth.cur_user && 
                      <Link to='/'>
                        <button onClick={handleLogout} className="login-button" type="button">로그아웃</button>
                      </Link>
                    }
                    </li>
                  </ul>
                </nav>
                <button onClick={MoveLogin} className="icon-button sm-only ">
                  <FontAwesomeIcon icon={faUser} className="ic-user" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>
    )
  }
)

export default Header;
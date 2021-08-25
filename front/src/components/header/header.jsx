import React, { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useLocation } from 'react-router-dom';

const Header = memo(({auth}) => {

  const [ loginState, setLoginState ] = useState(false);

  const location = useLocation();
  const history = useHistory();

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
    setLoginState(false);
  }
  
  useEffect( () => {
    // login 된 것을 감지.
    if(auth.cur_user) {
      setLoginState(true);
    }
  }, [auth.cur_user])

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
                
                {/* for table/desktop */}
                <nav className="header-nav sm-hidden">
                  <h1 className="visually-hidden">헤더 nav</h1> 

                  <ul className="header-nav-list" >
                    {
                      // 현재 접속 중인 페이지에 따라 
                      // nav에 언더라인 작성을 위함.
                      Active()
                    }
                    
                    <li className="header-nav-item">
                    {
                      // 로그인한 유저가 없을 때, 로그인 페이지 이동.
                      !loginState &&
                      <Link to='/login'>
                        <button className="login-button" type="button">로그인</button>
                      </Link>
                    }
                    {
                      // 로그인한 유저가 있을 때, 현재 페이지 유지.
                      loginState && 
                      <button onClick={handleLogout} className="login-button" type="button">로그아웃</button>
                    }
                    </li>
                  </ul>
                </nav>

                {/* for mobile */}
                <button className="login-button sm-only">
                  {
                    // 로그인한 유저가 없을 때,
                    !loginState && 
                    <Link to='/login'>
                      <span>Login</span>
                    </Link>
                  }
                  {
                    // 로그인한 유저가 있을 때,
                    loginState && <span onClick={handleLogout}>Logout</span>
                  }
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
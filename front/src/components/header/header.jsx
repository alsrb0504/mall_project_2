import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              
              <div className="header">
                  {/* 모바일 */}
                <button className="icon-button sm-only ">
                  <FontAwesomeIcon icon={faBars} className="ic-bar" />
                </button>
                
                <h1 className="header-title" >사이트 이름</h1>

                <nav className="header-nav sm-hidden">
                  {/* h1 헤더 nav 숨길 것 */}
                  <h1 className="visually-hidden">헤더 nav</h1> 
                  <ul className="header-nav-list" >
                    <li className="header-nav-item is-active">
                      <a href="/">제품 소개</a>
                    </li>
                    <li className="header-nav-item">
                      <a href="/">문의 게시판</a>
                    </li>
                    <li className="header-nav-item">
                      <button className="login-button" type="button">로그인</button>
                    </li>
                  </ul>
                </nav>

                <button className="icon-button sm-only ">
                  <FontAwesomeIcon icon={faSearch} className="ic-search" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>
  );

export default Header;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = (props) => (
      <header>
          {/* 모바일 */}
          <FontAwesomeIcon icon={faBars} className="search" />
          
        <h1>사이트 이름</h1>
        <nav>
          {/* h1 헤더 nav 숨길 것 */}
          <h1>헤더 nav</h1> 
          <ul>
            <li><a href="/">제품 소개</a></li>
            <li><a href="/">문의 게시판</a></li>
            <li>
              <button type="button">로그인</button>
            </li>
          </ul>
        </nav>
      </header>
  );

export default Header;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {


  return (
    <footer className="footer">
      <h1 className="visually-hidden">Footer</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">

            <div className="footer-container">
              <h3 className="footer-title">사이트 이름</h3>
              <div className="footer-info">
                <h4 className="footer-sub-title">ABOUT US</h4>

                <dl className="footer-info-list">
                  <div className="footer-info-item">
                    <dt>상호</dt>
                    <dd>(주)과일회사</dd>
                  </div>

                  <div className="footer-info-item">
                    <dt>주소</dt>
                    <dd>경기도 용인시 수지구 죽전로 152</dd>
                  </div>

                  <div className="footer-info-item">
                    <dt>상호</dt>
                    <dd>(주)과일회사</dd>
                  </div>

                  <div className="footer-info-item">
                    <dt>등록일</dt>
                    <dd>2021년 8월 10일</dd>
                  </div>

                  <div className="footer-info-item">
                    <dt>사업자 번호</dt>
                    <dd>031-8005-1234</dd>
                  </div>

                  <div className="footer-info-item address-info">
                    <dt>Contact us</dt>
                    <dd>
                      <address>
                        <a href="/">
                          alsrb8442@naver.com
                        </a>
                      </address>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="footer-button-container">
                <h4 className="footer-button-title footer-sub-title">FOLLOW US</h4>
                <button type="button">
                  <a href="/">
                  <FontAwesomeIcon icon={faFacebook} className="ic-brand" />
                  </a>
                </button>
                <button type="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} className="ic-brand" />
                  </a>
                </button>
                <button type="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faGithub } className="ic-brand" />
                  </a>
                </button>
                <button type="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} className="ic-brand" />
                  </a>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductPage = ({item}) => {

  const {name, sub_title, thumbnail, price_info, imgs} = item;

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <section className="product-page">
            <h1 className="visually-hidden" aria-hidden>product page</h1>


            <div className="product-page-thumbnail">
              <img src={thumbnail} alt="상품 이미지" />
            </div>

            <div>
              <div className="product-page-item-info">
                <h2 className="sub-title">{sub_title}</h2>
                <h1 className="title">{name}</h1>
                <span className="price">{price_info.text}</span>
              </div>

              <dl className="product-page-brand-info">
                <p className="info-container">
                  <dt>브랜드</dt>
                  <dd>아침의 농장</dd>
                </p>

                <p className="info-container">
                  <dt>배송료</dt>
                  <dd>기본 3,000원 / 도서산간지역 5,000원</dd>
                </p>

                <p className="info-container">
                  <dt>원산지</dt>
                  <dd>각 상품별 상세설명 참조</dd>
                </p>
              </dl>
            </div>
            
          </section>

          <main className="product-detail">
              <h2>상품 이미지들</h2>
              <ul>
              {
                imgs.map(img => {

                  return (
                  // 고유 키 나중에 수정
                  <li key={Math.random()} >
                    <img src={img} alt="상품 이미지" />
                  </li>  
                  )
                })
              }
            </ul>
            </main>

          {/* for mobile buy button */}
          {/* <aside className="sm-only">
            <h2 className="visually-hidden" aria-hidden>모바일 선택 창</h2>
            <button type="button">구매하기</button>
            <button>
              <FontAwesomeIcon icon={faHeart} className="ic-faHeart" />
              <span>11</span>
            </button>
          </aside> */}

        </div>
      </div>
    </div>
  )
}

export default ProductPage;
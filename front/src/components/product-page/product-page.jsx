import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {

  const [ count, setCount ] = useState(1);

  const priceRef = useRef();
  const resultRef = useRef();

  const location = useLocation();
  const {name, sub_title, thumbnail, price_info, imgs} = location.state;

  const Increase_Count = () => {
    const updated = count + 1;
    setCount(updated);

    Update_Price(updated);
  }

  const Decrease_Count = () => {
    const updated = ((count - 1 < 1) ? 1 : count - 1);
    setCount(updated);

    Update_Price(updated);
  }

  const Update_Price = (num) => {
    const price = PriceToText(num * price_info.price);
    priceRef.current.textContent = price + '원';
    resultRef.current.textContent = price + '원';
  }

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <section className="product-page">
            <h1 className="visually-hidden" aria-hidden>product page</h1>


            <div className="product-page-thumbnail">
              <img src={thumbnail} alt="상품 이미지" />
            </div>

            <div className="product-page-buy-part">
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

              {/* 데스크탑 화면에서만 출력 */}
              <form className="product-page-form lg-only" action="" method="POST">
                <h3 className="visually-hidden" aria-hidden>데스크탑 상품 구매 폼</h3>

                <span className="form-product-info">{name} {price_info.unit}kg</span>

                <div className="form-count">
                  <section className="count-container">
                    <div 
                      className="count-button" 
                      onClick={Decrease_Count}
                    >
                      <img src="/buttons/minus-button.svg" alt="minus-button" />
                    </div>

                    <span className="count">
                      {count}
                    </span>

                    <div 
                      className="count-button"
                      onClick={Increase_Count}
                    >
                      <img src="/buttons/plus-button.svg" alt="plus-button" />
                    </div>

                  </section>
                  <div ref={priceRef} className="price">
                    {PriceToText(price_info.price)}원
                  </div>
                </div>

                
                <p className="form-result">
                  <span>총 상품금액</span>
                  <strong ref={resultRef}>{PriceToText(price_info.price)}원</strong>
                  {/* 함수로 구현해서 나중에 단위당 가격 변동 */}
                  
                </p>

                <div className="form-button">
                  <button className="submit-button" type="submit">바로구매</button>
                </div>
              </form>
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

function PriceToText (price) {
  let text = price.toString(10);

  const length = text.length;

  if(length === 5) {
    text = text.slice(0, 2) + ',' + text.slice(text.length-3);
  } else if (length === 6) {
    text = text.slice(0, 3) + ',' + text.slice(text.length-3);
  } else {
    throw new Error(`product-page Error : ${price} value error!!`)
  }

  return text;
}
import React from 'react';

const ProductItem = (props) => {

  return (
    <li className="product-item">
      <a href="/">
        <img src="/images/pic01.jpg" alt="상품 이미지" />
        <div className="product-item-info">
          <h4>새벽이슬 사과</h4>
          <div className="price-info">
            <span>
              5kg 당
            </span>
            <span className="price">
              29,900원
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default ProductItem;
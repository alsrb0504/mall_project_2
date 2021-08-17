import React from 'react';

const ProductItem = ({item}) => {

  const { name, price_info, thumbnail } = item;

  return (
    <li className="product-item">
      <a href="/">
        <img src={thumbnail} alt="상품 이미지" />
        <div className="product-item-info">
          <h4>{name}</h4>
          <div className="price-info">
            <span>
              {price_info.unit}kg 당
            </span>
            <span className="price">
              {price_info.price}원
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default ProductItem;
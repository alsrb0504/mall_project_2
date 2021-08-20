import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductItem = ({item}) => {

  const { name, price_info, thumbnail } = item;
  
  const history = useHistory();

  const handleClick = () => {

    console.log('hi');

    history.push({
      pathname: '/product/item',
      state: item,
    });
  }

  return (
    <li onClick={handleClick} className="product-item">
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
    </li>
  )
}

export default ProductItem;
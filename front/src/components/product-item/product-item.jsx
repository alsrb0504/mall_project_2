import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductItem = ({item}) => {

  const { name, price_info, thumbnail } = item;
  
  const history = useHistory();

  const handleClick = () => {
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
            {PriceToText(price_info.price)}원
          </span>
        </div>
      </div>
    </li>
  )
}

export default ProductItem;

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
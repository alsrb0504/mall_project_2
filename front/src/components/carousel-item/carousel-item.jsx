import React from 'react';

const CarouselItem = ({item}) => {


  const {name, sub_title, description, thumbnail, price_info} = item;

  return (
    <li className="carousel-slider-item">
      <img src={thumbnail} alt="슬라이더 이미지 1" />
      <div className="item-text">
        <strong>{name}</strong>
        <span className="sub-title">{sub_title}</span>
        <p className="slider-description sm-hidden">
          {description}
        </p>
        <strong className="sm-hidden">{price_info.text}원</strong>
      </div>
    </li>
  )
}

export default CarouselItem;
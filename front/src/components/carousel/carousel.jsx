import React from 'react';

import TinySlider from "tiny-slider-react";


const settings = {
  container: '.carousel-slider-list',
  mouseDrag: true,
  controls: false,
  // navContainer: '.carousel-slider-buttons',
  // navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  // preventScrollOnTouch: true,
};


  
const Carousel = (props) => {

  return (
    <div className="carousel-slider">
      <div className="container">
        <div className="row">
          <div className="col-4">

            <ol className="carousel-slider-list">
              <TinySlider TinySlider settings={settings}>
                  <li className="carousel-slider-item">
                    <img src="./images/pic01.jpg" alt="슬라이더 이미지 1" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <p>정말 맛있는 사과</p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic02.jpg" alt="슬라이더 이미지 2" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <p>정말 맛있는 사과</p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic03.jpg" alt="슬라이더 이미지 3" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <p>정말 맛있는 사과</p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic04.jpg" alt="슬라이더 이미지 1" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <p>정말 맛있는 사과</p>
                    </div>
                  </li>
              </TinySlider>
            </ol>


          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Carousel;
import React from 'react';

import TinySlider from "tiny-slider-react";


const settings = {
  container: '.carousel-slider-list',
  mouseDrag: true,
  controls: false,
  // navContainer: '.carousel-slider-buttons',
  // navAsThumbnails: true,
  arrowKeys: true,
  // autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  // preventScrollOnTouch: true,
};


  
const Carousel = (props) => {

  return (
    <div className="carousel-slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-12">

            <ol className="carousel-slider-list">
              <TinySlider TinySlider settings={settings}>
                  <li className="carousel-slider-item">
                    <img src="./images/pic01.jpg" alt="슬라이더 이미지 1" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <span className="sub-title">정말 맛있는 사과</span>
                      <p className="slider-description sm-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,
                      </p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic02.jpg" alt="슬라이더 이미지 2" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <span className="sub-title">정말 맛있는 사과</span>
                      <p className="slider-description sm-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,
                      </p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic03.jpg" alt="슬라이더 이미지 3" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <span className="sub-title">정말 맛있는 사과</span>
                      <p className="slider-description sm-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,
                      </p>
                    </div>
                  </li>
                  <li className="carousel-slider-item">
                    <img src="./images/pic04.jpg" alt="슬라이더 이미지 1" />
                    <div className="item-text">
                      <strong>맛있는 사과</strong>
                      <span className="sub-title">정말 맛있는 사과</span>
                      <p className="slider-description sm-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,
                      </p>
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
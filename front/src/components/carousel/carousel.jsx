import React from 'react';

import TinySlider from "tiny-slider-react";
import Product from '../../services/product';
import CarouselItem from '../carousel-item/carousel-item';


const product_class = new Product();

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
          <div className="col-sm-4 col-md-12">

            <ol className="carousel-slider-list">
              <TinySlider TinySlider settings={settings}>
                {
                  product_class &&
                  product_class.product_list.map(item => 
                    <CarouselItem key={item.id} item={item} />
                  )
                }
              </TinySlider>
            </ol>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Carousel;
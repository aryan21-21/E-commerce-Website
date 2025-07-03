import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  slideBanner1  from "../../assets/Slides/slideBanner1.jpg"
import  slideBanner2   from "../../assets/Slides/slideBanner2.jpg"
function HomeBanner() {
  const settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow : true,
    autoplay :true
  };

  return (
    <div className="HomeBanner">
      <Slider {...settings}>
        <div className="item">
          <img
            src={slideBanner1}
            alt=""
            className="w-100"
          />
        </div>
        <div className="item">
          <img
            src={slideBanner2}
            alt=""
            className="w-100"
          />
        </div>
        
      </Slider>
    </div>
  );
}

export default HomeBanner;

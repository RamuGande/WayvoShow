import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './singlecard.css'; 

const SingleCardSlider = () => {
    const [sliderRef, setSliderRef] = useState(null);

   
    const settings = {
      infinite: true, 
      speed: 500,     
      slidesToShow: 1,  
      slidesToScroll: 1, 
      autoplay: true,   
      autoplaySpeed: 2000, 
      arrows: true,     
      dots: true,       
    };
  
    // To ensure the slider is set after initial mount
    useEffect(() => {
      if (!sliderRef) return;
      sliderRef.slickPlay(); // Start autoplay when component is mounted
    }, [sliderRef]);
  
    return (
      <div className="slider-container">
        <Slider {...settings} ref={setSliderRef}>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1740655920858_1stmarch2025oscartitlesweb.jpg" alt="First Slide" />
          </div>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1740643926755_nevenkaredlorryfestdesktopcarousel.jpg" alt="Second Slide" />
          </div>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" alt="Third Slide" />
          </div>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1740982999036_3rdmarbrazilvsindialegendscreative4desktopcarousel.jpg" alt="Third Slide" />
          </div>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1740737011875_cheemanweb.jpg" alt="Third Slide" />
          </div>
          <div className="slider-item">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1740735403758_1stmarindianhistoryredlorrydesktopcarousel.jpg" alt="Third Slide" />
          </div>
          
        </Slider>
      </div>
    );
  };

export default SingleCardSlider;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './singlecard.css';

function SingleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1740655920858_1stmarch2025oscartitlesweb.jpg",
      alt: "Oscar Titles"
    },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1740643926755_nevenkaredlorryfestdesktopcarousel.jpg",
      alt: "Lorry Fest"
    },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
      alt: "Play Card"
    },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1740982999036_3rdmarbrazilvsindialegendscreative4desktopcarousel.jpg",
      alt: "Brazil vs India"
    },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1740737011875_cheemanweb.jpg",
      alt: "Cheeman"
    },
    {
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1740735403758_1stmarindianhistoryredlorrydesktopcarousel.jpg",
      alt: "Indian History"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const allImagesLoaded = loadedImages.length === images.length;

  return (
    <div className="page-wrapper">
      <div className="slider-container">
        {!allImagesLoaded && (
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        )}
        
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              <div className="slide-content">
                <img
                  src={image.src}
                  alt={image.alt}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="slide-overlay">
                  <h2 className="slide-title">{image.alt}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="slider-arrow prev"
          onClick={goToPrevSlide}
        >
          <ChevronLeft size={24} color="white" />
        </div>
        
        <div
          className="slider-arrow next"
          onClick={goToNextSlide}
        >
          <ChevronRight size={24} color="white" />
        </div>

        <div className="slider-nav">
          {images.map((_, index) => (
            <div
              key={index}
              className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleSlider;
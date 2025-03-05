import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './singlecard.css'; 

const SingleCardSlider = () => {
    const [movies, setMovies] = useState([]);
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

    useEffect(() => {
        
        fetch("\movies.json")
            .then(response => response.json())
            .then(data => setMovies(data.movies))
            .catch(error => console.error('Error fetching the JSON data:', error));

        if (!sliderRef) return;
        sliderRef.slickPlay();
    }, [sliderRef]);

    return (
        <div className="slider-container">
            <Slider {...settings} ref={setSliderRef}>
                {movies.map((movie) => (
                    <div className="slider-item" key={movie.id}>
                        <img src={movie.image_url} alt={movie.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SingleCardSlider;

import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Multi.css';
im[ort]

import { FaStar } from 'react-icons/fa';

function Multicard() {
  const [movies, setMovies] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    fetch('/movies2.json')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="carousel-container">
      <h1 className="slider-title">Recommended</h1>
      <Carousel responsive={responsive}>
        {movies.map((movie) => (
          <div className="carousel-item" key={movie.id}>
            <img src={movie.image_url} alt={movie.title} />
            
            <div className="button-group">
              <button className="rating-button">
                <FaStar /> Rating: {movie.rating}
              </button>
              <button className="votes-button">
                {movie.votes} Votes
              </button>
            </div>
            <div className="type">
              <h4>{movie.title}</h4>
              <p>{movie.type}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Second Carousel container */}
      <h1 className="slider-title">Upcoming</h1>
      <Carousel responsive={responsive}>
        {movies.map((movie) => (
          <div className="carousel-item" key={movie.id}>
            <img src={movie.image_url} alt={movie.title} />
            
            <div className="button-group">
              <button className="rating-button">
                <FaStar /> Rating: {movie.rating}
              </button>
              <button className="votes-button">
                {movie.votes} Votes
              </button>
            </div>
            <div className="type">
              <h4>{movie.title}</h4>
              <p>{movie.type}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Multicard;

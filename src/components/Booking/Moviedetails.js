import React from 'react';
import { Star } from 'lucide-react';
import './moviedetails.css';
import BookingForm from './Bookingform';

const MovieDetails = ({ movie }) => {
  return (
    <div className="container">
      <div className="movie-info">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <div className="details">
          <h1>{movie.title}</h1>
          <p><strong>Starring:</strong> {movie.stars}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <div className="rating">
            <Star size={20} fill="gold" color="gold" />
            <span>{movie.imdbRating}/10</span>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}

export default MovieDetails;
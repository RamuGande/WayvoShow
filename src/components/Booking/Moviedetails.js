import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './moviedetails.css';
import { useParams } from 'react-router-dom';
import ShowCard from './ShowCard';

const MovieDetails = ({ onShowSelect }) => {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/movies2.json')
          .then(response => response.json())
          .then(data => setMovies(data.movies))
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    const movie = movies.find(m => m.id === parseInt(id));

    useEffect(() => {
        if (movie) {
            fetch(`http://localhost:5000/Theater_Generation/shows?movie_name=${"Inception"}&date=2025-03-06&time=19:00:00`)
              .then(response => response.json())
              .then(data => setShows(data))
              .catch(error => console.error('Error fetching shows:', error));
            console.log(shows);
        }
    }, [movie]);

    if (!movies.length || !movie) {
        return <div>Loading or Movie not found...</div>;
    }

    return (
        <div className="moviedetails_container">
            <div className="movie-info">
                <img src={movie.image_url} alt={movie.title} className="movie-image" />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <p><strong>Type:</strong> {movie.type}</p>
                    <div className="rating">
                        <Star size={20} fill="gold" color="gold" />
                        <span>{movie.rating}</span>
                    </div>
                </div>
            </div>
            <div className="shows-container">
                {shows.map(show => (
                    <ShowCard 
                        key={show.show_id} 
                        show={{
                            theatre: show.theater_name,
                            showTime: show.show_time,
                            date: show.show_date
                        }} 
                        onClick={() => onShowSelect(show.show_id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieDetails;
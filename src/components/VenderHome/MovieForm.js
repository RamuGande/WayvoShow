// MovieForm.jsx
import React, { useState } from 'react';
import './Movie.css';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    releaseDate: '',
    movieImage: '',
    ticketPrice: '',
    language: '',
    movieType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    storedMovies.push({ ...formData });
    localStorage.setItem('movies', JSON.stringify(storedMovies));
    alert('Movie details submitted successfully!');
    setFormData({
      movieName: '',
      releaseDate: '',
      movieImage: '',
      ticketPrice: '',
      language: '',
      movieType: ''
    });
  };

  return (
    <div className="mov-container">
      <div className="mov-logo">
      <img src={require("../../assets/images/log.png")} alt="img" className="movie-logo-img"/>
        {/* <img src="../../assets/images/log.png" alt="Logo"  /> */}
      </div>

      <div className="mov-form-wrapper">
        <h2 className="mov-title">Submit Movie Details</h2>
        <form onSubmit={handleSubmit} className="movie-form">
          {[
            { label: 'Movie Name', name: 'movieName', type: 'text' },
            { label: 'Release Date', name: 'releaseDate', type: 'date' },
            { label: 'Movie Image URL', name: 'movieImage', type: 'text' },
            { label: 'Ticket Price', name: 'ticketPrice', type: 'number' },
            { label: 'Language', name: 'language', type: 'text' },
            { label: 'Movie Type', name: 'movieType', type: 'text' }
          ].map((field) => (
            <div className="mov-form-group" key={field.name}>
              <label className="mov-label">{field.label}:</label>
              <input
                className="mov-input"
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="mov-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
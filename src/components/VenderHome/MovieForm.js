import React, { useState } from 'react';
import './Movie.css';

const MovieForm = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    releaseDate: '',
    movieImage: '',
    ticketPrice: '',
    language: '',
    movieType: '',
    city: '',
    theatre: ''
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
      movieType: '',
      city: '',
      theatre: ''
    });
  };

  return (
    <div className="mov-container">
      <div className="mov-logo">
        <img src={require("../../assets/images/log.png")} alt="Logo" className="movie-logo-img"/>
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

          {/* City Dropdown */}
          <div className="mov-form-group">
            <label className="mov-label">City:</label>
            <select
              className="mov-input"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
          </div>

          {/* Theatre Dropdown */}
          <div className="mov-form-group">
            <label className="mov-label">Theatre:</label>
            <select
              className="mov-input"
              name="theatre"
              value={formData.theatre}
              onChange={handleChange}
              required
            >
              <option value="">Select Theatre</option>
              <option value="Theatre 1">PVR</option>
              <option value="Theatre 2">AAA</option>
              <option value="Theatre 3">CINEPOLIS</option>
              <option value="Theatre 4">ARJUN</option>
            </select>
          </div>

          <button className="mov-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
